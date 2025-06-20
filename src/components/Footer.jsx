import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  We're hiring
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Hire interns for your company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Post a Job
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Team Diary
                </a>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>{" "}
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Free Job Alerts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  College TPO registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  List of Companies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/kpbsupportssolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://x.com/Kpbssolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
            <a
              href="https://www.youtube.com/@KPBSupportsSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/kpbsupportssolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 KPB Supports Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
