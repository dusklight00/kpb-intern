import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "STARTER",
      price: "Free",
      period: "/user/month",
      popular: false,
      features: [
        "Interactive Mode",
        "Automatic Attendance",
        "Single Shift",
        "Basic Support",
        "Email Integration",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
    },
    {
      name: "PROFESSIONAL",
      price: "₹300",
      period: "/user/month",
      popular: true,
      features: [
        "Everything in Starter",
        "Silent/Invisible Tracking",
        "Advanced Analytics",
        "Multi-shift Support",
        "Priority Support",
        "Custom Reports",
        "API Access",
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      name: "ENTERPRISE",
      price: "₹550",
      period: "/user/month",
      popular: false,
      features: [
        "Everything in Professional",
        "Live Videos",
        "Real Time Statuses",
        "Advanced Security",
        "Dedicated Account Manager",
        "Custom Integrations",
        "SLA Guarantee",
        "24/7 Phone Support",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent pricing that grows with your business. No hidden
            fees, no long-term contracts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                plan.popular ? "ring-4 ring-blue-500 ring-opacity-50" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>POPULAR</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Compare All Features
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 text-lg font-bold text-gray-600">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 text-lg font-bold text-blue-600">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 text-lg font-bold text-purple-600">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Interactive Mode
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Automatic Attendance
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Single Shift
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Silent/Invisible Tracking
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Advanced Analytics
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Live Videos
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    Real Time Statuses
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    24/7 Support
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-gray-400">Email Only</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-blue-600">Priority</span>
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className="text-purple-600">Phone & Email</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Can I change plans anytime?
                </h3>
                <p className="text-blue-100">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-blue-100">
                  Yes, we offer a 14-day free trial for our Professional and
                  Enterprise plans. No credit card required.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-blue-100">
                  We accept all major credit cards, UPI, net banking, and
                  digital wallets for your convenience.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Do you offer discounts for annual plans?
                </h3>
                <p className="text-blue-100">
                  Yes, save up to 20% when you choose annual billing. Contact
                  our sales team for bulk discounts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Is my data secure?</h3>
                <p className="text-blue-100">
                  Absolutely. We use enterprise-grade security with 256-bit SSL
                  encryption and regular security audits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-blue-100">
                  Yes, you can cancel your subscription at any time. No
                  cancellation fees or long-term commitments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
