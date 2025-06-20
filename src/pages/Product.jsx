import {
  Shield,
  TrendingUp,
  Upload,
  Settings,
  ExternalLink,
} from "lucide-react";
import SEO from "../components/SEO";

const Product = () => {
  const features = [
    {
      icon: Shield,
      title: "Easy Interface",
      description: "Our platform ensures that it is user friendly platform.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Capability At Once",
      description: "Product have mail format limit upto 200 mails.",
      color: "green",
    },
    {
      icon: Upload,
      title: "Single Click Interaction",
      description:
        "Easily integrate our product with your existing systems and workflows.",
      color: "purple",
    },
    {
      icon: Settings,
      title: "Upload files easily",
      description: "you can choose file type and upload easily",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      icon: "text-blue-600",
      border: "border-blue-200",
      hover: "hover:border-blue-300",
    },
    green: {
      bg: "bg-green-100",
      icon: "text-green-600",
      border: "border-green-200",
      hover: "hover:border-green-300",
    },
    purple: {
      bg: "bg-purple-100",
      icon: "text-purple-600",
      border: "border-purple-200",
      hover: "hover:border-purple-300",
    },
    orange: {
      bg: "bg-orange-100",
      icon: "text-orange-600",
      border: "border-orange-200",
      hover: "hover:border-orange-300",
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <SEO
        title="Product - Email Formatter"
        description="Discover our Email Formatter tool - a powerful, user-friendly platform for formatting up to 200 emails at once. Easy interface, single-click interaction, and seamless integration."
        keywords="email formatter, email tool, bulk email processing, email management, productivity tool"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Product Showcase
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-2xl text-blue-600 font-semibold">
            Email Formatter
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Streamline your email formatting process with our powerful and
            intuitive tool designed to make your communication more professional
            and efficient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const colorClass = colorClasses[feature.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colorClass.border} ${colorClass.hover} transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-center group`}
              >
                <div
                  className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-8 h-8 ${colorClass.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Product Demo Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Email Formatter?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      User-Friendly Interface
                    </h4>
                    <p className="text-gray-600">
                      Navigate through our intuitive design that makes email
                      formatting a breeze, even for beginners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      High Volume Processing
                    </h4>
                    <p className="text-gray-600">
                      Handle up to 200 emails at once, perfect for bulk email
                      campaigns and large-scale communications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Seamless Integration
                    </h4>
                    <p className="text-gray-600">
                      Easily integrate with your existing workflow and email
                      systems without any technical hassle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Multiple File Formats
                    </h4>
                    <p className="text-gray-600">
                      Support for various file types including CSV, Excel, and
                      TXT formats for maximum flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 text-white">
                <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">
                    Email Formatter Preview
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/30 rounded p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Format Ready</span>
                      </div>
                    </div>
                    <div className="bg-white/30 rounded p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">
                          Processing 200 emails...
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/30 rounded p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm">
                          Export Options Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Try our Email Formatter today and experience the difference in your
            email management workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://shubham6m-email-formatter.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Try Free Demo</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <div className="text-blue-100 text-sm">
              <p>✓ No registration required</p>
              <p>✓ Instant access</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Secure & Private
            </h3>
            <p className="text-gray-600">
              Your data is processed securely and never stored on our servers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              High Performance
            </h3>
            <p className="text-gray-600">
              Lightning-fast processing with optimized algorithms for best
              results.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Get help whenever you need it with our dedicated support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
