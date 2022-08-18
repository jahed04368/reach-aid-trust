import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-center text-black bg-blue-500">
      <div className="pt-6 my-10">
        <div className="flex flex-row">
          <Link
            href="#!"
            type="button"
            className="leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out px-2"
          >
            <BsFacebook
              size={30}
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              className="mx-auto"
            />
          </Link>

          <Link
            href="#!"
            type="button"
            className="leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out px-2"
          >
            <BsTwitter
              size={30}
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="mx-auto"
            />
          </Link>

          <Link
            href="#!"
            type="button"
            className="leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out px-2"
          >
            <BsInstagram
              size={30}
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="mx-auto"
            />
          </Link>
        </div>

        <div className="pt-6">
          <form action="">
            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placea.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2"></div>
      </div>
      <div className="text-center">
        <p>© 2022 Copyright - Reach Aid Trust - Charity number: 1127768</p>
      </div>
    </footer>
  );
};

export default Footer;
