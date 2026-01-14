import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Factorio Calculators
          </Link>
          <div className="flex gap-4">
            <Link
              to="/solar"
              className="rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Solar Calculator
            </Link>
            <Link
              to="/science"
              className="rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Science Calculator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
