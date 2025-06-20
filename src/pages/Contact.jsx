import { useState } from "react";
import {
  Phone,
  Mail,
  User,
  Clock,
  MessageCircle,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    duration: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add API call here
    alert("Thank you for your message! We will get back to you soon.");
  };

  const phoneNumbers = [
    { country: "🇺🇸", code: "(+1) 772 222 3505", number: "+17722223505" },
    { country: "🇨🇦", code: "(+1) 772 222 3505", number: "+17722223505" },
    { country: "🇬🇧", code: "(+44) 169 188 7766", number: "+441691887766" },
    { country: "🇦🇺", code: "(+61) 280733418", number: "+61280733418" },
  ];

  const offices = [
    {
      location: "India (Head Office)",
      address: "New Delhi, India",
      phone: "+91 9310650633",
      email: "info@kpbsupportssolutions.com",
    },
    {
      location: "United States",
      address: "Florida, USA",
      phone: "+1 772 222 3505",
      email: "usa@kpbsupportssolutions.com",
    },
    {
      location: "United Kingdom",
      address: "London, UK",
      phone: "+44 169 188 7766",
      email: "uk@kpbsupportssolutions.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch and let us know how we can
            help.
          </p>
        </div>

        {/* Quick Call Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-3">
              <Phone className="w-8 h-8 text-blue-600" />
              <span>Quick call to:</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoneNumbers.map((phone, index) => (
              <a
                key={index}
                href={`tel:${phone.number}`}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-blue-300"
              >
                <div className="text-3xl mb-3">{phone.country}</div>
                <div className="flex items-center justify-center space-x-2 text-blue-600 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>{phone.code}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              We'd Love to Hear from You!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select Duration</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6-12 Months">6-12 Months</option>
                  <option value="More than 12 Months">
                    More than 12 Months
                  </option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name (Optional)"
                  className="w-full pl-4 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>Our Offices</span>
              </h3>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-600 pl-6 py-4"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {office.location}
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <a
                          href={`tel:${office.phone}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {office.phone}
                        </a>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {office.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span>Business Hours</span>
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-blue-100 text-sm">
                    * Emergency support available 24/7 for Enterprise customers
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Instant Support
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+919310650633"
                  className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us Now</p>
                    <p className="text-blue-600">+91 9310650633</p>
                  </div>
                </a>

                <a
                  href="mailto:info@kpbsupportssolutions.com"
                  className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-green-600">
                      info@kpbsupportssolutions.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Us
          </h3>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm">Head Office: New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
