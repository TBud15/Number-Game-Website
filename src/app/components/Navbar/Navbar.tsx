"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const toggleGameDropdown = () => {
    setIsGameDropdownOpen(!isGameDropdownOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
          >
            Number Game
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              onClick={handleNavCollapse}
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className={`${
                  isNavCollapsed ? "block" : "hidden"
                } flex-shrink-0 size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className={`${
                  isNavCollapsed ? "hidden" : "block"
                } flex-shrink-0 size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`hs-collapse transition-all duration-300 ease-in-out ${
            isNavCollapsed ? "max-h-0 opacity-0" : "max-h-screen opacity-100"
          } basis-full grow sm:max-h-full sm:opacity-100 sm:block`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className="font-medium text-blue-500"
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <div className="relative">
              <button
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 inline-flex items-center"
                onClick={toggleGameDropdown}
              >
                Games
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isGameDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 shadow-lg rounded-md py-2 z-10">
                  <Link
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
                    href="/game-over-one"
                    onClick={() => {
                      setIsNavCollapsed(true);
                      setIsGameDropdownOpen(false);
                    }}
                  >
                    Sums over one
                  </Link>
                  <Link
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
                    href="/game-below-one"
                    onClick={() => setIsGameDropdownOpen(false)}
                  >
                    Sums below one
                  </Link>
                </div>
              )}
            </div>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
