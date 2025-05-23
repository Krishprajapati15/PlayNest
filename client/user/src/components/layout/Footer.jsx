const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-slate-200 dark:border-slate-800 shadow-inner py-8 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="PlayNest" className="h-10 w-10 " />
          <span className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-200 tracking-tight select-none">
            PlayNest
          </span>
        </div>
        <div className="flex flex-col md:items-end items-center gap-2">
          <div className="flex flex-wrap gap-2 items-center text-slate-600 dark:text-slate-300 text-sm">
            <span>
              &copy; {new Date().getFullYear()} PlayNest. All rights reserved.
            </span>
            <span className="hidden md:inline-block">|</span>
            <span className="flex items-center gap-1">
              Developed with
              <svg
                className="inline h-4 w-4 fill-pink-500 animate-pulse"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <a
                href="https://github.com/krishprajapati15"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-600 dark:text-indigo-300 hover:underline hover:text-indigo-800 dark:hover:text-yellow-300 transition-colors flex items-center gap-1"
              >
                Krish Prajapati
                <svg
                  className="w-5 h-5 ml-1 fill-slate-600 dark:fill-slate-300 hover:fill-indigo-600 dark:hover:fill-yellow-300 transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.427 2.867 8.179 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.09.636-1.34-2.221-.254-4.555-1.114-4.555-4.957 0-1.094.39-1.988 1.029-2.688-.103-.254-.446-1.28.098-2.67 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.336c1.91-1.294 2.748-1.025 2.748-1.025.545 1.39.202 2.416.1 2.67.64.7 1.028 1.594 1.028 2.688 0 3.852-2.337 4.7-4.566 4.95.359.31.678.922.678 1.86 0 1.343-.012 2.427-.012 2.756 0 .267.18.577.688.48C19.135 20.197 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
