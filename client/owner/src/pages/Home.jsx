import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "@components/common";
import { useState, useEffect } from "react";
import banner1 from "/banner-1.png";
import banner2 from "/banner-2.jpeg";
import banner3 from "/banner-3.jpeg";

const Home = () => {
  // Enhanced slider functionality
  const slides = [
    {
      image: banner1,
      title: "Advanced Analytics Dashboard",
      description: "Real-time insights and booking statistics",
    },
    {
      image: banner2,
      title: "Smart Booking Management",
      description: "Effortlessly manage all your turf bookings",
    },
    {
      image: banner3,
      title: "Revenue Analytics",
      description: "Track and analyze your business growth",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-left z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Admin Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-6"
              >
                <span className="animate-pulse mr-2">●</span>
                <span>Admin Dashboard</span>
                <span className="ml-2 text-xs bg-accent/20 px-2 py-1 rounded-full">
                  {new Date().toLocaleDateString()}
                </span>
              </motion.div>

              {/* Title and Description */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Welcome to
                <span className="text-gradient bg-gradient-to-r from-accent to-primary block">
                  Playnest Admin
                </span>
              </h1>

              <p className="text-lg text-base-content/80 mb-8 max-w-xl">
                Manage and monitor your turf facilities with our powerful admin
                dashboard. Get insights, handle bookings, and grow your business
                efficiently.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="btn btn-accent btn-lg px-8 hover:scale-105 transform transition-transform"
                >
                  Login to Dashboard
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline btn-lg px-8 hover:bg-base-200/50"
                >
                  Contact Support
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="group hover:scale-105 transition-all duration-300 bg-base-100/50 backdrop-blur-sm rounded-xl p-4 border border-base-300 hover:border-accent/50 cursor-pointer"
                  >
                    <h3 className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-base-content/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Enhanced Slider */}
            <motion.div
              className="flex-1 w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-base-300">
                {/* Custom Slider */}
                <div className="relative h-[500px]">
                  {slides.map((slide, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                      style={{
                        display: currentSlide === index ? "block" : "none",
                      }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Slide Content */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-2xl font-bold mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-white/80">{slide.description}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Slider Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-accent w-6"
                            : "bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* New Feature Highlights Section */}
      <section className="py-16 bg-base-200/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Powerful Admin Features</h2>
            <p className="text-base-content/70">
              Everything you need to manage your turf business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-base-100 border border-base-300 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Sample stats data
const stats = [
  { value: "500+", label: "Active Turfs" },
  { value: "10k+", label: "Monthly Bookings" },
  { value: "95%", label: "Satisfaction Rate" },
];

// Feature highlights data
const features = [
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Track bookings, revenue, and user engagement in real-time",
  },
  {
    icon: "📱",
    title: "Mobile Responsive",
    description: "Manage your business from any device, anywhere",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    description: "Get instant alerts for new bookings and important updates",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    description:
      "Integrated payment processing with detailed transaction history",
  },
  {
    icon: "📈",
    title: "Business Insights",
    description: "Data-driven insights to grow your business",
  },
  {
    icon: "🎮",
    title: "Easy Management",
    description: "Intuitive interface for effortless turf management",
  },
];

export default Home;
