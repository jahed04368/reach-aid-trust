import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { getAllProjects } from '../../helpers/api-util';
import Link from 'next/link';

const AllProjects = ({ projects }) => {
  // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  // const formattedAddress = location.replace(', ', '\n');

  return (
    <div>
      <Navbar />
      {projects.map((project) => {
        return (
          <div className="justify-center flex" key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <div className="flex items-center bg-white rounded-lg border shadow-md flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                  width={640}
                  height={500}
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  alt=""
                  src={`/${project.image}`}
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-96">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default AllProjects;

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
