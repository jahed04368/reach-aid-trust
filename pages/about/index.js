import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import ImageOne from '../../public/images/about/about-us-1.jpg';
import ImageTwo from '../../public/images/about/about-us-2.jpg';
import ImageThree from '../../public/images/about/about-us-3.jpg';
import Head from 'next/head';

const About = () => {
  const [truncateText, setTruncateText] = useState(true);

  return (
    <div>
      <Head>
        <title>Reach Aid Trust</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className={`my-16 mx-6 text-lg md:text-xl`}>
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
          className="italic text-green-600 lg:hidden"
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
                  src={ImageOne}
                  alt=""
                  width={400}
                  height={250}
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
                  src={ImageTwo}
                  alt=""
                  width={400}
                  height={250}
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
                  src={ImageThree}
                  alt=""
                  width={400}
                  height={250}
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-lg md:text-xl">
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
