import {
  Shield,
  Award,
  CheckCircle,
  FileText,
  Globe,
  Lock,
  Users,
  Zap,
} from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      issuer: "International Organization for Standardization",
      validUntil: "2026",
      description:
        "Demonstrates our commitment to quality management and continuous improvement in all our processes.",
      color: "blue",
      status: "Active",
    },
    {
      icon: Lock,
      title: "ISO 27001:2013",
      subtitle: "Information Security Management",
      issuer: "International Organization for Standardization",
      validUntil: "2025",
      description:
        "Ensures the highest standards of information security management and data protection.",
      color: "green",
      status: "Active",
    },
    {
      icon: Zap,
      title: "CMMI Level 3",
      subtitle: "Capability Maturity Model Integration",
      issuer: "CMMI Institute",
      validUntil: "2025",
      description:
        "Validates our mature processes for software development and service delivery.",
      color: "purple",
      status: "Active",
    },
    {
      icon: Globe,
      title: "GDPR Compliance",
      subtitle: "General Data Protection Regulation",
      issuer: "European Union",
      validUntil: "Ongoing",
      description:
        "Full compliance with EU data protection and privacy regulations.",
      color: "indigo",
      status: "Active",
    },
    {
      icon: Users,
      title: "SOC 2 Type II",
      subtitle: "Service Organization Control",
      issuer: "AICPA",
      validUntil: "2025",
      description:
        "Demonstrates our commitment to security, availability, and confidentiality.",
      color: "orange",
      status: "Active",
    },
    {
      icon: FileText,
      title: "PCI DSS",
      subtitle: "Payment Card Industry Data Security Standard",
      issuer: "PCI Security Standards Council",
      validUntil: "2025",
      description:
        "Ensures secure handling of credit card information and payment processing.",
      color: "red",
      status: "Active",
    },
  ];

  const upcomingCertifications = [
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System",
      expectedDate: "Q2 2025",
      description:
        "Environmental management system certification to demonstrate our commitment to sustainability.",
    },
    {
      title: "ITIL 4 Foundation",
      subtitle: "IT Service Management",
      expectedDate: "Q3 2025",
      description:
        "Best practices for IT service management and service delivery.",
    },
    {
      title: "Agile/Scrum Certification",
      subtitle: "Project Management",
      expectedDate: "Q4 2025",
      description:
        "Agile and Scrum methodologies for efficient project management and delivery.",
    },
  ];

  const complianceFrameworks = [
    {
      name: "HIPAA",
      description:
        "Health Insurance Portability and Accountability Act compliance for healthcare clients.",
      icon: Shield,
    },
    {
      name: "SOX",
      description:
        "Sarbanes-Oxley Act compliance for financial reporting and corporate governance.",
      icon: FileText,
    },
    {
      name: "NIST",
      description:
        "National Institute of Standards and Technology cybersecurity framework.",
      icon: Lock,
    },
    {
      name: "CIS Controls",
      description:
        "Center for Internet Security controls for effective cyber defense.",
      icon: CheckCircle,
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      border: "border-green-200",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      border: "border-indigo-200",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Certifications & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our certifications demonstrate our commitment to maintaining the
            highest standards of quality, security, and compliance across all
            our services and operations.
          </p>
        </div>

        {/* Current Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain active certifications from leading industry
              organizations to ensure compliance and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const colorClass = colorClasses[cert.color];
              return (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-lg border-2 ${colorClass.border} hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}
                >
                  <div className={`${colorClass.bg} p-6 text-center`}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <cert.icon className={`w-8 h-8 ${colorClass.text}`} />
                    </div>
                    <div className="text-sm font-medium text-gray-600 mb-1">
                      Valid Until: {cert.validUntil}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {cert.status}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className={`${colorClass.text} font-medium mb-3`}>
                      {cert.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{cert.issuer}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to industry-standard compliance frameworks to ensure
              regulatory compliance and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <framework.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {framework.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Upcoming Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We continuously invest in obtaining new certifications to stay
              ahead of industry standards and requirements.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-orange-600 font-medium mb-2">
                      {cert.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  <div className="text-orange-600 font-medium text-sm bg-orange-50 px-4 py-2 rounded-full">
                    Expected: {cert.expectedDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Certifications Matter */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Why Certifications Matter
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our certifications provide assurance to our clients that we
              maintain the highest standards of quality, security, and
              compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Credibility</h3>
              <p className="text-blue-100">
                Building trust with clients through verified compliance and
                quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Assurance</h3>
              <p className="text-blue-100">
                Ensuring the highest levels of data security and privacy
                protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
              <p className="text-blue-100">
                Demonstrating commitment to continuous improvement and quality
                management.
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Verification */}
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Certificate Verification
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            All our certifications can be independently verified through the
            respective certification bodies. We maintain transparency in our
            compliance status.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                View Certificates
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Access and download our current certificates
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                View All
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Verify Status
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Check the current status of our certifications
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Verify Now
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            For any questions about our certifications or compliance status,
            please contact our compliance team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
