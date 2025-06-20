"""
Database connection and utility functions for MongoDB
"""

import os
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError
import logging
from typing import Optional, Dict, Any
from contextlib import contextmanager

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DatabaseConnection:
    """
    MongoDB database connection manager
    """
    
    def __init__(self, uri: str = None, database_name: str = "kpb_solutions"):
        """
        Initialize database connection
        
        Args:
            uri (str): MongoDB connection URI
            database_name (str): Name of the database to use
        """
        self.uri = uri or os.getenv(
            'MONGODB_URI', 
            'mongodb+srv://dusklight00:1234qazw0987@cluster0.hzvuejj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        )
        self.database_name = database_name
        self.client: Optional[MongoClient] = None
        self.database = None
        
    def connect(self) -> bool:
        """
        Establish connection to MongoDB
        
        Returns:
            bool: True if connection successful, False otherwise
        """
        try:
            self.client = MongoClient(
                self.uri,
                serverSelectionTimeoutMS=5000,  # 5 second timeout
                connectTimeoutMS=10000,         # 10 second connection timeout
                socketTimeoutMS=20000,          # 20 second socket timeout
                retryWrites=True
            )
            
            # Test the connection
            self.client.admin.command('ping')
            self.database = self.client[self.database_name]
            
            logger.info(f"Successfully connected to MongoDB database: {self.database_name}")
            return True
            
        except (ConnectionFailure, ServerSelectionTimeoutError) as e:
            logger.error(f"Failed to connect to MongoDB: {str(e)}")
            return False
        except Exception as e:
            logger.error(f"Unexpected error connecting to MongoDB: {str(e)}")
            return False
    
    def disconnect(self):
        """
        Close the database connection
        """
        if self.client:
            self.client.close()
            self.client = None
            self.database = None
            logger.info("Disconnected from MongoDB")
    
    def get_database(self):
        """
        Get the database instance
        
        Returns:
            Database instance or None if not connected
        """
        if not self.database:
            if not self.connect():
                return None
        return self.database
    
    def get_collection(self, collection_name: str):
        """
        Get a collection from the database
        
        Args:
            collection_name (str): Name of the collection
            
        Returns:
            Collection instance or None if database not available
        """
        db = self.get_database()
        if db:
            return db[collection_name]
        return None
    
    def health_check(self) -> Dict[str, Any]:
        """
        Check database health and return status
        
        Returns:
            Dict containing health status information
        """
        try:
            if not self.client:
                return {
                    "status": "disconnected",
                    "message": "No active connection",
                    "connected": False
                }
            
            # Ping the database
            result = self.client.admin.command('ping')
            
            # Get server info
            server_info = self.client.server_info()
            
            return {
                "status": "healthy",
                "message": "Database connection is active",
                "connected": True,
                "server_version": server_info.get("version"),
                "database_name": self.database_name,
                "ping_result": result
            }
            
        except Exception as e:
            return {
                "status": "error",
                "message": f"Health check failed: {str(e)}",
                "connected": False
            }
    
    @contextmanager
    def transaction(self):
        """
        Context manager for database transactions
        """
        session = None
        try:
            if not self.client:
                raise Exception("No database connection available")
                
            session = self.client.start_session()
            session.start_transaction()
            yield session
            session.commit_transaction()
            
        except Exception as e:
            if session:
                session.abort_transaction()
            logger.error(f"Transaction failed: {str(e)}")
            raise
        finally:
            if session:
                session.end_session()


# Global database instance
db_connection = DatabaseConnection()

def get_db():
    """
    Get the global database connection instance
    
    Returns:
        DatabaseConnection instance
    """
    return db_connection

def get_database():
    """
    Get the database instance
    
    Returns:
        Database instance or None if not connected
    """
    return db_connection.get_database()

def get_collection(collection_name: str):
    """
    Get a collection from the database
    
    Args:
        collection_name (str): Name of the collection
        
    Returns:
        Collection instance or None if database not available
    """
    return db_connection.get_collection(collection_name)

def init_database():
    """
    Initialize the database connection
    
    Returns:
        bool: True if initialization successful, False otherwise
    """
    return db_connection.connect()

def close_database():
    """
    Close the database connection
    """
    db_connection.disconnect()

# Collection names constants
class Collections:
    """
    Constants for collection names
    """
    USERS = "users"
    PRODUCTS = "products"
    ORDERS = "orders"
    BLOGS = "blogs"
    CONTACTS = "contacts"
    NEWSLETTERS = "newsletters"
    ANALYTICS = "analytics"
    SETTINGS = "settings"

# Common database operations
class DatabaseOperations:
    """
    Common database operations
    """
    
    @staticmethod
    def insert_one(collection_name: str, document: Dict[str, Any]) -> Optional[str]:
        """
        Insert a single document into a collection
        
        Args:
            collection_name (str): Name of the collection
            document (dict): Document to insert
            
        Returns:
            str: Inserted document ID or None if failed
        """
        try:
            collection = get_collection(collection_name)
            if collection:
                result = collection.insert_one(document)
                return str(result.inserted_id)
        except Exception as e:
            logger.error(f"Failed to insert document: {str(e)}")
        return None
    
    @staticmethod
    def find_one(collection_name: str, filter_dict: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """
        Find a single document in a collection
        
        Args:
            collection_name (str): Name of the collection
            filter_dict (dict): Filter criteria
            
        Returns:
            dict: Found document or None if not found
        """
        try:
            collection = get_collection(collection_name)
            if collection:
                return collection.find_one(filter_dict)
        except Exception as e:
            logger.error(f"Failed to find document: {str(e)}")
        return None
    
    @staticmethod
    def find_many(collection_name: str, filter_dict: Dict[str, Any] = None, limit: int = None) -> list:
        """
        Find multiple documents in a collection
        
        Args:
            collection_name (str): Name of the collection
            filter_dict (dict): Filter criteria
            limit (int): Maximum number of documents to return
            
        Returns:
            list: List of found documents
        """
        try:
            collection = get_collection(collection_name)
            if collection:
                cursor = collection.find(filter_dict or {})
                if limit:
                    cursor = cursor.limit(limit)
                return list(cursor)
        except Exception as e:
            logger.error(f"Failed to find documents: {str(e)}")
        return []
    
    @staticmethod
    def update_one(collection_name: str, filter_dict: Dict[str, Any], update_dict: Dict[str, Any]) -> bool:
        """
        Update a single document in a collection
        
        Args:
            collection_name (str): Name of the collection
            filter_dict (dict): Filter criteria
            update_dict (dict): Update operations
            
        Returns:
            bool: True if update successful, False otherwise
        """
        try:
            collection = get_collection(collection_name)
            if collection:
                result = collection.update_one(filter_dict, update_dict)
                return result.modified_count > 0
        except Exception as e:
            logger.error(f"Failed to update document: {str(e)}")
        return False
    
    @staticmethod
    def delete_one(collection_name: str, filter_dict: Dict[str, Any]) -> bool:
        """
        Delete a single document from a collection
        
        Args:
            collection_name (str): Name of the collection
            filter_dict (dict): Filter criteria
            
        Returns:
            bool: True if deletion successful, False otherwise
        """
        try:
            collection = get_collection(collection_name)
            if collection:
                result = collection.delete_one(filter_dict)
                return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Failed to delete document: {str(e)}")
        return False

# Initialize database connection on module import
if __name__ == "__main__":
    # Test the database connection
    if init_database():
        print("Database connection test successful!")
        health = db_connection.health_check()
        print(f"Health check: {health}")
        close_database()
    else:
        print("Database connection test failed!")
