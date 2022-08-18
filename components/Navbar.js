import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../public/logo/TEST-LOGO.png';

const Navbar = () => {
  const [closeNav, setCloseNav] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-blue-500	border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto m-2 md:m-5">
          <Link href="/" className="flex items-center">
            <div className="flex flex-inline">
              <div className="mr-2">
                <Image
                  src={Logo}
                  alt="Reach Aid Trust"
                  width={40}
                  height={35}
                />
              </div>

              <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                Reach Aid <span className="text-red-900">Trust</span>
              </span>
            </div>
          </Link>

          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={() => setCloseNav(!closeNav)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu size={25} />
          </button>
          <div
            className={
              closeNav
                ? 'w-full md:block md:w-auto'
                : 'hidden w-full md:block md:w-auto'
            }
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium text-white">
              <li>
                <Link href="/">
                  <a
                    className="block py-2 pr-4 pl-3 text-black font-semibold rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/donate">
                  <a className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Donate
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
