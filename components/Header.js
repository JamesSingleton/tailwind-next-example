import Link from 'next/link';
import styles from "./Header.module.css";

const Header = () => (
  <div className="container mx-auto relative bg-white">
    <div className="max-w-7xl mx-auto ">
      <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="flex">
              <span className="brand">Brand Name</span>
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
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
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/new-arrivals">
            <a className={styles.menuLink}>
              New Arrivals
            </a>
          </Link>
          <Link href="/products">
            <a className={styles.menuLink}>
              Shop by Benefit
            </a>
          </Link>

          <Link href="/learn">
            <a className={styles.menuLink}>
              Learn
            </a>
          </Link>
          <Link href="/sales">
            <a className={styles.menuLink}>
              Sale
            </a>
          </Link>
          <Link href="/about-us">
            <a className={styles.menuLink}>
              About Us
            </a>
          </Link>
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <a
            href="#"
            className="whitespace-no-wrap text-base leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Sign in
            </a>
          <span className="inline-flex  shadow-sm">
            <a
              href="#"
              className="whitespace-no-wrap rounded-sm inline-flex items-center justify-center px-4 py-2 border border-transparent text-white leading-6 font-medium bg-gray-900 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Sign up
              </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;