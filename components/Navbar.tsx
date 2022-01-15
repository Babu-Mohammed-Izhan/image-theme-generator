import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden(!hidden);
  };
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div
        className="
          px-6
          py-3
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div className="flex items-center justify-between">
          <div className="pt-1">
            <Link href="/">
              <a
                className="
                font-notable
                text-black
                text-xl
                dark:text-white
                md:text-2xl
                font-extrabold
                tracking-[5px]
              "
              >
                Chameleon
              </a>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="
                text-gray-500
                dark:text-gray-200
                hover:text-gray-600
                dark:hover:text-gray-400
                focus:outline-none focus:text-gray-600
                dark:focus:text-gray-400
              "
              aria-label="toggle menu"
              onClick={() => handleToggle()}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`items-center md:flex ${hidden ? 'hidden' : ''} `}>
          <div className="flex flex-col md:flex-row md:mx-6 md:mt-3">
            <Link href="/">
              <a
                className="
                pt-1
                text-gray-700
                dark:text-gray-200
                hover:text-indigo-500
                dark:hover:text-indigo-400
                md:mx-4 md:my-0
              "
              >
                Home
              </a>
            </Link>

            <Link href="/gallery">
              <a
                className="
                pt-1
                text-gray-700
                dark:text-gray-200
                hover:text-indigo-500
                dark:hover:text-indigo-400
                md:mx-4 md:my-0
              "
              >
                Gallery
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="
                pt-1
                text-gray-700
                dark:text-gray-200
                hover:text-indigo-500
                dark:hover:text-indigo-400
                md:mx-4 md:my-0
              "
              >
                Contact
              </a>
            </Link>
            <Link href="/about">
              <a
                className="
                pt-1
                text-gray-700
                dark:text-gray-200
                hover:text-indigo-500
                dark:hover:text-indigo-400
                md:mx-4 md:my-0
              "
              >
                About
              </a>
            </Link>
            <Link href="/generate" passHref>
              <button
                className="
                font-bold
                px-2
                border-black
                border-4
                rounded-sm
                md:mx-4 
                hover:bg-black
                hover:text-white
              "
              >
                Generate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
