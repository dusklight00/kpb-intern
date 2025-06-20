import {
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously push boundaries and explore cutting-edge solutions to stay ahead of the curve.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building strong partnerships and working closely with our clients to achieve mutual success.",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "Delivering measurable and sustainable business outcomes that exceed expectations.",
      color: "purple",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Maintaining the highest ethical standards in all our business relationships and operations.",
      color: "red",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Providing world-class services with a global perspective and local expertise.",
      color: "indigo",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "Building lasting relationships based on trust, transparency, and reliable service delivery.",
      color: "orange",
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      description:
        "Visionary leader with 15+ years of experience in business consulting and IT services.",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      description:
        "Technology expert specializing in digital transformation and innovative solutions.",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Amit Patel",
      role: "Head of Operations",
      description:
        "Operations specialist ensuring seamless service delivery and client satisfaction.",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Sneha Gupta",
      role: "Head of Business Development",
      description:
        "Strategic thinker driving business growth and partnership development.",
      image: "/api/placeholder/200/200",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Started with a vision to simplify business operations through technology.",
    },
    {
      year: "2021",
      title: "First 100+ Clients",
      description:
        "Reached our first major milestone of serving over 100 satisfied clients.",
    },
    {
      year: "2022",
      title: "International Expansion",
      description:
        "Extended our services globally with offices in USA, UK, and Australia.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Received multiple awards for excellence in business consulting and IT services.",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Launched our dedicated innovation center for emerging technologies.",
    },
    {
      year: "2025",
      title: "250+ Success Stories",
      description:
        "Continuing to grow with 250+ satisfied customers and expanding team.",
    },
  ];

  const stats = [
    { number: "250+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "40+", label: "Team Members", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About KPB Supports Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a dynamic company dedicated to simplifying business
            operations through innovative technology solutions and comprehensive
            support services.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between businesses and
                service providers, KPB Supports Solutions has been at the
                forefront of digital transformation and business consulting
                since 2020.
              </p>
              <p>
                We believe in simplifying the way businesses work by offering a
                comprehensive one-stop portal that connects organizations with
                the right talent and service providers, ensuring efficient and
                effective solutions for every need.
              </p>
              <p>
                Our journey began with a simple idea: to empower businesses by
                providing educational, employment placement, and business
                support services that help organizations grow and thrive in
                today's competitive landscape.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-200 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-l-4 border-blue-600">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide comprehensive business support services on a
              pocket-friendly budget, all on one platform. Our one-stop solution
              empowers businesses to streamline operations and individuals to
              grow their skills, enabling success in both their careers and
              ventures.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border-l-4 border-purple-600">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To create a one-stop platform that offers comprehensive,
              budget-friendly solutions for businesses while empowering
              individuals to grow their skills for career and business success.
              We envision an ecosystem where businesses thrive by outsourcing
              smarter, faster, and with confidence.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships
              with clients, partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a startup vision to a leading business solutions provider -
              here's our story of growth and success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } relative`}
                >
                  <div className="w-1/2 px-6">
                    <div
                      className={`bg-white rounded-2xl shadow-lg p-6 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to delivering
              exceptional results and driving your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that trust us to deliver exceptional
            results. Let's discuss how we can help your business grow and
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
