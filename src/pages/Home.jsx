import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import {
  MessageCircle,
  Phone,
  Mail,
  User,
  Building,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Settings,
  Laptop,
  Rocket,
  University,
  GraduationCap,
  Factory,
  Plane,
  ShoppingCart,
  Hospital,
  Heart,
  Tv,
  Briefcase,
  Users,
  Smartphone,
  Clock,
  Target,
  Trophy,
  Handshake,
  TrendingUp,
} from "lucide-react";

const Home = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isExpertFormOpen, setIsExpertFormOpen] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    projects: 0,
    experts: 0,
  });
  const [experienceTime, setExperienceTime] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  // Counter animation
  useEffect(() => {
    const targets = { customers: 250, projects: 100, experts: 40 };
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });

    // Experience timer
    const startDate = new Date("2020-01-01");
    const updateExperience = () => {
      const now = new Date();
      const diff = now - startDate;
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      setExperienceTime({ years, months, days });
    };

    updateExperience();
    const experienceTimer = setInterval(updateExperience, 86400000); // Update daily

    return () => {
      clearInterval(experienceTimer);
    };
  }, []);

  const services = [
    { icon: Settings, title: "BPM", link: "/industries/bpm" },
    { icon: Laptop, title: "IT Services", link: "/industries/itservices" },
    { icon: Rocket, title: "Technology", link: "/industries/technology" },
    { icon: University, title: "BFSI", link: "/industries/bfsi" },
    { icon: GraduationCap, title: "Education", link: "/industries/education" },
    { icon: Factory, title: "Manufacturing & Production", link: "#" },
    {
      icon: Plane,
      title: "Infrastructure, Transport & Real Estate",
      link: "#",
    },
    { icon: ShoppingCart, title: "Consumer & Retail", link: "#" },
    { icon: Hospital, title: "Hospitality", link: "#" },
    { icon: Heart, title: "Healthcare & Life Sciences", link: "#" },
    { icon: Tv, title: "Media, Entertainment & Telecom", link: "#" },
    { icon: Briefcase, title: "Professional Services", link: "#" },
    { icon: Users, title: "Social Services", link: "#" },
    { icon: Smartphone, title: "Miscellaneous", link: "#" },
  ];
  return (
    <div className="min-h-screen">
      <SEO
        title="Home"
        description="KPB Supports Solutions - Business Consultant & IT Services. We simplify the way businesses work by offering comprehensive one-stop solutions for B2B and B2C needs."
        keywords="business consulting, IT services, digital transformation, BPM, technology solutions, business support"
      />
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Business Consultant & <br />
                  <span className="text-blue-600">IT Services</span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  We believe in simplifying the way businesses work. By offering
                  a one-stop portal, we bridge the gap between businesses and
                  service providers, ensuring efficient and effective solutions
                  for every need, whether B2B or B2C.
                </p>
              </div>

              {/* Team Expert Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      TEAM EXPERT
                    </h3>
                    <p className="text-gray-600">Get instant support</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:+919310650633"
                    className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">📱 +91 9310650633</span>
                  </a>
                  <a
                    href="mailto:info@kpbsupportssolutions.com"
                    className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">
                      info@kpbsupportssolutions.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Talk to Expert Button */}
              <button
                onClick={() => setIsExpertFormOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>TALK TO AN EXPERT →</span>
              </button>
            </div>

            {/* Right Content - Login Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {isLoginForm ? "Login Here" : "Sign Up Here"}
              </h2>

              <form className="space-y-6">
                {!isLoginForm && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder={
                      isLoginForm ? "Enter Password" : "Enter New Password"
                    }
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {!isLoginForm && (
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors duration-300"
                >
                  {isLoginForm ? "Login" : "Sign Up"}
                </button>
              </form>

              <p className="text-center text-gray-600 mt-6">
                {isLoginForm
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <br />
                <button
                  onClick={() => setIsLoginForm(!isLoginForm)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {isLoginForm ? "Sign up" : "Login"} here
                </button>
              </p>

              <p className="text-center text-gray-600 mt-4">
                Connect with us on
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/kpbsupportssolutions/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/people/KPB-Solutions/61552608755485/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/kpbsupportssolutions/"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/Kpbssolutions"
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@KPBSupportsSolutions"
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Services We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <a
                  href={service.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  Get Your Lead
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Stair of Success..
            </h1>
            <p className="text-xl text-blue-100">
              Transforming Visions into Reality through Innovative Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                To provide comprehensive business support services on a
                pocket-friendly budget, all on one platform. Our one-stop
                solution empowers businesses to streamline operations and
                individuals to grow their skills, enabling success in both their
                careers and ventures.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                To create a one-stop platform that offers comprehensive,
                budget-friendly solutions for businesses while empowering
                individuals to grow their skills for career and business
                success. We envision an ecosystem where businesses thrive by
                outsourcing smarter, faster, and with confidence—letting us
                handle the details so you can focus on growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.customers}
              </div>
              <div className="text-gray-600 font-medium">
                Satisfied Customers
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {experienceTime.years}+
              </div>
              <div className="text-sm text-gray-500 mb-2">
                {experienceTime.months}m {experienceTime.days}d
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.projects}
              </div>
              <div className="text-gray-600 font-medium">
                Completed Projects
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.experts}
              </div>
              <div className="text-gray-600 font-medium">Team of Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/logo.png"
                alt="About Us"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Who We Are & Why We're here
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    • We believe in simplifying the way businesses work. By
                    offering a one-stop portal, we bridge the gap between
                    businesses and service providers, ensuring efficient and
                    effective solutions for every need, whether B2B or B2C.
                  </p>
                  <p>
                    • We're here to empower businesses by providing educational,
                    employment placement, and business support services. Our
                    goal? To help you grow by connecting you to the right talent
                    and service providers, all through one seamless platform.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Continuously pushing boundaries and exploring cutting-edge
                    solutions.
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Collaboration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Building strong partnerships and working closely with our
                    clients.
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Results
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Delivering measurable and sustainable business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Form Modal */}
      {isExpertFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Connect with Our Expert
              </h3>
              <button
                onClick={() => setIsExpertFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <a
                href="tel:+919310650633"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9310650633</span>
              </a>
              <a
                href="mailto:info@kpbsupportssolutions.com"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@kpbsupportssolutions.com</span>
              </a>
            </div>

            <form className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
