import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import useTurfData from "../hooks/useTurfData";
import TurfCard from "../components/turf/TurfCard";
import TurfCardSkeleton from "../components/ui/TurfCardSkeleton";
import Footer from "../components/layout/Footer";
import banner1 from "/banner-1.png";
import banner2 from "/banner-2.jpeg";
import banner3 from "/banner-3.jpeg";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { turfs, loading } = useTurfData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              poster={banner2}
            >
              <source src="/your-background-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Perfect
              <span className="text-accent"> Playing Field</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience seamless booking of premium turf facilities. Your game,
              your way, at your convenience.
            </p>
            <div className="flex gap-4">
              <Link
                to={isLoggedIn ? "/auth/turfs" : "/signup"}
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="btn btn-outline btn-lg text-white hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose <span className="text-accent">TurfSpot</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-base-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-base-content/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Turfs Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Turfs</h2>
            <p className="text-base-content/80 max-w-2xl mx-auto">
              Explore our hand-picked selection of premium turf facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <TurfCardSkeleton key={`skeleton-${index}`} />
                ))
              : turfs.slice(0, 3).map((turf) => (
                  <motion.div
                    key={turf._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <TurfCard turf={turf} />
                  </motion.div>
                ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to={isLoggedIn ? "/auth/turfs" : "/turfs"}
              className="btn btn-primary btn-lg hover:scale-105 transition-transform"
            >
              Explore All Turfs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-3xl mx-auto text-center border border-white/20"
          >
            {/* Elegant decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-emerald-300/30 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-teal-300/30 rounded-full" />

            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to Book Your Perfect Turf?
            </h2>

            <p className="text-lg text-emerald-100/90 mb-8">
              Join thousands of sports enthusiasts who have found their ideal
              playing venue
            </p>

            <Link
              to={isLoggedIn ? "/auth/turfs" : "/signup"}
              className="inline-block px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl
                 transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                 hover:bg-emerald-50"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const features = [
  {
    icon: "🎯",
    title: "Easy Booking",
    description:
      "Book your preferred turf in just a few clicks with our seamless reservation system.",
  },
  {
    icon: "⭐",
    title: "Premium Facilities",
    description:
      "Access to high-quality turfs with modern amenities and maintained to perfection.",
  },
  {
    icon: "🏃",
    title: "Flexible Timing",
    description:
      "Choose from various time slots that suit your schedule, available 24/7.",
  },
];

export default Home;
