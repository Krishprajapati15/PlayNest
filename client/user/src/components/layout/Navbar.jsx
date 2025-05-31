import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher";

const navLinks = [];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 backdrop-blur-lg shadow-lg border-slate-200  transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="PlayNest"
              className="h-10 w-10 transition-transform group-hover:scale-110"
            />
            <span className="font-extrabold text-2xl text-indigo-700 dark:text-indigo-300 tracking-tight group-hover:text-indigo-900 dark:group-hover:text-indigo-400 transition-colors">
              PlayNest
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium transition
                    ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md dark:bg-indigo-500 dark:text-white"
                        : "text-slate-700 dark:text-slate-200 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-200"
                    }
                  `}
                  style={{
                    transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Link
              to="/login"
              className={`ml-2 px-4 py-2 rounded-md font-semibold transition shadow
                ${
                  location.pathname === "/login"
                    ? "bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white"
                    : "bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-800 dark:bg-slate-800 dark:text-indigo-200 dark:border-indigo-900 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-100"
                }
              `}
              style={{
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
              }}
            >
              Login
            </Link>
            {/* Mobile Burger */}
            <div className="md:hidden">
              <details className="dropdown">
                <summary className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-700 dark:text-indigo-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>
                <ul className="dropdown-content absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg p-2 flex flex-col gap-2 border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className={`block px-4 py-2 rounded-md font-medium transition
                            ${
                              isActive
                                ? "bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white"
                                : "text-slate-700 dark:text-slate-200 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-200"
                            }
                          `}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      to="/login"
                      className={`block px-4 py-2 rounded-md font-medium transition
                        ${
                          location.pathname === "/login"
                            ? "bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white"
                            : "text-slate-700 dark:text-slate-200 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-200"
                        }
                      `}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
