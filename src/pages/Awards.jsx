import { Award, Trophy, Star, Medal, Crown, Shield } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Business Consulting Firm 2024",
      organization: "Business Excellence Awards",
      year: "2024",
      description:
        "Recognized for outstanding performance in business consulting and client satisfaction.",
      color: "gold",
    },
    {
      icon: Star,
      title: "Top IT Services Provider",
      organization: "Tech Innovation Awards",
      year: "2024",
      description:
        "Awarded for excellence in IT services delivery and innovative solutions.",
      color: "blue",
    },
    {
      icon: Medal,
      title: "Customer Service Excellence",
      organization: "Service Quality Institute",
      year: "2023",
      description:
        "Honored for exceptional customer service and client relationship management.",
      color: "green",
    },
    {
      icon: Crown,
      title: "Emerging Business Leader",
      organization: "Startup India Initiative",
      year: "2023",
      description:
        "Recognized as a leading emerging business in the consulting sector.",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Quality Assurance Certification",
      organization: "ISO Standards Board",
      year: "2022",
      description:
        "Certified for maintaining highest quality standards in service delivery.",
      color: "orange",
    },
    {
      icon: Award,
      title: "Innovation in Technology",
      organization: "Digital India Awards",
      year: "2022",
      description:
        "Awarded for innovative use of technology in business solutions.",
      color: "teal",
    },
  ];

  const recognitions = [
    {
      title: "Featured in Business Weekly",
      description:
        "Our CEO was featured in Business Weekly magazine discussing the future of business consulting.",
      date: "March 2024",
    },
    {
      title: "Top 50 Startups to Watch",
      description:
        "Listed among the top 50 startups to watch in the business consulting industry.",
      date: "January 2024",
    },
    {
      title: "Client Testimonial Excellence",
      description:
        "Achieved 98% client satisfaction rating based on independent survey.",
      date: "December 2023",
    },
    {
      title: "Industry Partnership Recognition",
      description:
        "Recognized for successful partnerships with leading technology companies.",
      date: "October 2023",
    },
  ];

  const colorClasses = {
    gold: "from-yellow-400 to-yellow-600 text-yellow-800",
    blue: "from-blue-400 to-blue-600 text-blue-800",
    green: "from-green-400 to-green-600 text-green-800",
    purple: "from-purple-400 to-purple-600 text-purple-800",
    orange: "from-orange-400 to-orange-600 text-orange-800",
    teal: "from-teal-400 to-teal-600 text-teal-800",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Awards & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are proud to be recognized by industry leaders and organizations
            for our commitment to excellence, innovation, and outstanding
            service delivery.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div
                className={`bg-gradient-to-br ${
                  colorClasses[award.color]
                } p-6 text-center`}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <award.icon
                    className={`w-10 h-10 ${
                      award.color === "gold"
                        ? "text-yellow-600"
                        : `text-${award.color}-600`
                    }`}
                  />
                </div>
                <div className="text-white font-bold text-lg">{award.year}</div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {award.title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {award.organization}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recent Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our continuous efforts and dedication have earned us recognition
              from various industry publications and organizations.
            </p>
          </div>

          <div className="space-y-8">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {recognition.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {recognition.description}
                    </p>
                  </div>
                  <div className="text-blue-600 font-medium text-sm bg-blue-50 px-4 py-2 rounded-full">
                    {recognition.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Achievement Highlights
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">6+</div>
              <div className="text-blue-200 font-medium">Major Awards</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">98%</div>
              <div className="text-blue-200 font-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">250+</div>
              <div className="text-blue-200 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">5+</div>
              <div className="text-blue-200 font-medium">Years Excellence</div>
            </div>
          </div>
        </div>

        {/* Certifications Preview */}
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Industry Certifications
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            In addition to awards, we maintain various industry certifications
            that ensure we meet the highest standards of quality and security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-gray-600 text-sm">Quality Management System</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ISO 27001
              </h3>
              <p className="text-gray-600 text-sm">
                Information Security Management
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                CMMI Level 3
              </h3>
              <p className="text-gray-600 text-sm">Process Improvement</p>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
            View All Certifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
