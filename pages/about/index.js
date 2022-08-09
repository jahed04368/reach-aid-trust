import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import TestImage from '../../public/images/test-image.png';

const About = () => {
  const [truncateText, setTruncateText] = useState(true);

  return (
    <div>
      <Navbar />
      <div className={`my-16 mx-1 text-xl text-center md:text-start`}>
        <p className={`${truncateText ? 'line-clamp-6 lg:line-clamp-0' : ''}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <button
          className="italic text-green-600 text-base lg:hidden"
          onClick={() => setTruncateText(!truncateText)}
        >
          {truncateText ? 'show more' : 'show less'}
        </button>
        <div className="my-6">
          <h2>
            Since our establishment in 2017 we have carried out the following
            projects:
          </h2>
          <ul className="my-4">
            <li>- Covid 19 pandemic food packages in Bangladesh</li>
            <li>- Covid 19 pandemic food packages in London</li>
            <li>- Bangaldesh food packages</li>
          </ul>
          <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
            <div className="col-span-1 md:col-span-1 lg:col-span-1 rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2 my-2">
              <Link
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <Image
                  className="rounded"
                  src={TestImage}
                  alt=""
                  width={3840}
                  height={2160}
                />
              </Link>
            </div>
            <div className="col-span-1 md:col-span-1 rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2 my-2">
              <Link
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <Image
                  className="rounded"
                  src={TestImage}
                  alt=""
                  width={3840}
                  height={2160}
                />
              </Link>
            </div>
            <div className="col-span-1 md:col-span-0 rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2 my-2">
              <Link
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <Image
                  className="rounded"
                  src={TestImage}
                  alt=""
                  width={3840}
                  height={2160}
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center">
          We hope that you will support our projects by donating as much as you
          can and consider setting up a monthly standing order or direct debit
          by going to our donation page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
