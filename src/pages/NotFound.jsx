import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 mb-4">
            Need help? Contact our support team:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="tel:+919310650633"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              📱 +91 9310650633
            </a>
            <a
              href="mailto:info@kpbsupportssolutions.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ✉️ info@kpbsupportssolutions.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
