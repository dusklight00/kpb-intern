import { useState } from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Tag,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Business Process Management in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of BPM, including AI integration, automation, and digital transformation strategies.",
      category: "BPM",
      author: "Rajesh Kumar",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 2,
      title: "Digital Transformation: A Complete Guide for Small Businesses",
      excerpt:
        "Learn how small businesses can leverage digital transformation to compete with larger enterprises and improve operational efficiency.",
      category: "Digital Transformation",
      author: "Priya Sharma",
      date: "2025-01-10",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt:
        "Essential cybersecurity measures every business should implement to protect their remote workforce and sensitive data.",
      category: "Security",
      author: "Amit Patel",
      date: "2025-01-05",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 4,
      title: "AI and Machine Learning in Business Consulting",
      excerpt:
        "How artificial intelligence and machine learning are revolutionizing business consulting and decision-making processes.",
      category: "Technology",
      author: "Sneha Gupta",
      date: "2024-12-28",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 5,
      title: "Building Effective Remote Work Policies",
      excerpt:
        "A comprehensive guide to creating and implementing remote work policies that boost productivity and employee satisfaction.",
      category: "HR & Management",
      author: "Rajesh Kumar",
      date: "2024-12-20",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 6,
      title: "The Rise of Cloud Computing in Enterprise Solutions",
      excerpt:
        "Understanding the benefits and challenges of cloud adoption for enterprise-level organizations and how to navigate the transition.",
      category: "Technology",
      author: "Priya Sharma",
      date: "2024-12-15",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 7,
      title: "Cost-Effective IT Solutions for Growing Businesses",
      excerpt:
        "Discover budget-friendly IT solutions that can help growing businesses scale without breaking the bank.",
      category: "IT Services",
      author: "Amit Patel",
      date: "2024-12-10",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 8,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt:
        "Learn how to leverage data analytics to make informed business decisions and gain competitive advantages.",
      category: "Analytics",
      author: "Sneha Gupta",
      date: "2024-12-05",
      readTime: "11 min read",
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "BPM",
    "Technology",
    "Digital Transformation",
    "Security",
    "HR & Management",
    "IT Services",
    "Analytics",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest insights, trends, and best practices in
            business consulting, technology, and digital transformation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {searchTerm === "" && selectedCategory === "All" && (
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Posts
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                {searchTerm || selectedCategory !== "All"
                  ? "Search Results"
                  : "Latest Posts"}
              </h2>
              {filteredPosts.length > 0 && (
                <span className="text-gray-500">
                  ({filteredPosts.length} posts)
                </span>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  No posts found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-white" />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {post.author}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatDate(post.date)}
                              </p>
                            </div>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 transition-colors">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex space-x-4 group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {formatDate(post.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {categories
                  .filter((cat) => cat !== "All")
                  .map((category) => {
                    const count = blogPosts.filter(
                      (post) => post.category === category
                    ).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors text-left"
                      >
                        <span className="text-gray-700">{category}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {count}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter and never miss our latest insights
                and updates.
              </p>
              <div className="space-y-4">
                {" "}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
