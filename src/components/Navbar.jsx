import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/helpers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery);
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 gap-4">
          {" "}
          {/* Logo - Left side */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <img
              src="/logo.png"
              alt="KPB Logo"
              className="h-12 w-10 sm:h-14 sm:w-12 rounded-lg mr-2 sm:mr-3 flex-shrink-0"
            />
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 whitespace-nowrap">
              <span className="hidden lg:inline">KPB Supports Solutions</span>
              <span className="hidden sm:inline lg:hidden">KPB Solutions</span>
              <span className="sm:hidden">KPB</span>
            </span>
          </div>{" "}
          {/* Center content - Search and Navigation */}
          <div className="flex-1 flex justify-center items-center gap-4 lg:gap-6 mx-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-gradient-to-r from-gray-100 to-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="bg-transparent border-none outline-none text-gray-700 px-3 py-1 w-40 lg:w-48"
              />
              <button
                onClick={handleSearch}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
              <Link
                to="/"
                className={`px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                  isActive("/")
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                HOME
              </Link>{" "}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base"
              >
                SERVICES
              </a>
              <Link
                to="/product"
                className={`px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                  isActive("/product")
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                PRODUCT
              </Link>{" "}
              <Link
                to="/pricing"
                className={`px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                  isActive("/pricing")
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                PRICING
              </Link>
              {/* Resources Dropdown */}
              <div className="relative">
                {" "}
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base"
                >
                  RESOURCES
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/awards"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Awards
                    </Link>
                    <Link
                      to="/certifications"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Certifications
                    </Link>
                    <Link
                      to="/blogs"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Blogs
                    </Link>
                  </div>
                )}
              </div>{" "}
              <Link
                to="/contact"
                className={`px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                  isActive("/contact")
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                CONTACT US
              </Link>
            </div>
          </div>
          {/* Mobile menu button - Right side */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mb-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 flex-1"
                />
                <button onClick={handleSearch}>
                  <Search size={18} />
                </button>
              </div>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>{" "}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                SERVICES
              </a>
              <Link
                to="/product"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                PRODUCT
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                PRICING
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/awards"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Awards
              </Link>
              <Link
                to="/certifications"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>
              <Link
                to="/blogs"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
