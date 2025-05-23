import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TurfCard from "./TurfCard.jsx";
import TurfCardSkeleton from "../ui/TurfCardSkeleton.jsx";
import useTurfData from "../../hooks/useTurfData.jsx";
import SearchTurf from "../search/SearchTurf.jsx";

const Turf = () => {
  const { turfs, loading, error } = useTurfData();
  const [filteredTurfs, setFilteredTurfs] = useState(turfs);
  const [selectedSport, setSelectedSport] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [noResults, setNoResults] = useState(false);

  // Get unique sport types from all turfs
  const uniqueSports = [
    "All",
    ...new Set(turfs.flatMap((turf) => turf.sportTypes)),
  ];

  useEffect(() => {
    setFilteredTurfs(turfs);
  }, [turfs]);

  const handleSearch = (searchTerm) => {
    const filtered = turfs.filter(
      (turf) =>
        turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        turf.sportTypes.some((sport) =>
          sport.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        turf.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTurfs(filtered);
    setNoResults(filtered.length === 0);
  };

  const filterBySport = (sport) => {
    setSelectedSport(sport);
    if (sport === "All") {
      setFilteredTurfs(turfs);
    } else {
      const filtered = turfs.filter((turf) => turf.sportTypes.includes(sport));
      setFilteredTurfs(filtered);
    }
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sorted = [...filteredTurfs].sort((a, b) => {
      switch (criteria) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "price":
          return (a.price || 0) - (b.price || 0);
        default:
          return 0;
      }
    });
    setFilteredTurfs(sorted);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
          <p className="text-red-500">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Amazing Turfs
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find the perfect turf for your game. Browse through our selection of
            premium sports facilities.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <SearchTurf onSearch={handleSearch} />
            </div>

            {/* Sport Type Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {uniqueSports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => filterBySport(sport)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                    ${
                      selectedSport === sport
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {sport}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="name">Sort by Name</option>
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredTurfs.length}{" "}
          {filteredTurfs.length === 1 ? "turf" : "turfs"}
        </div>

        {/* Turf Grid */}
        <AnimatePresence mode="wait">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <TurfCardSkeleton key={`skeleton-${index}`} />
              ))}
            </div>
          ) : noResults ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <img
                src="/no-results.svg" // Add your no results illustration
                alt="No results found"
                className="w-64 h-64 mx-auto mb-4 opacity-50"
              />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                No turfs found
              </h2>
              <p className="text-gray-500">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTurfs.map((turf, index) => (
                <motion.div
                  key={turf._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TurfCard turf={turf} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Turf;
