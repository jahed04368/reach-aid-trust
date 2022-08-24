import React from 'react';
import HomepageCard from '../components/HomepageCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FcDonate } from 'react-icons/fc';
import { getFeaturedProjects } from '../helpers/api-util';
import Link from 'next/link';
import Head from 'next/head';

const Homepage = ({ projects }) => {
  return (
    <div className="text-black">
      <Head>
        <title>Reach Aid Trust</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <h1 className="my-8 md:mt-16 px-3 md:px-3 xl:px-8 text-center italic text-xl">
        At
        <span className="font-semibold text-sky-600 px-2 underline">
          Reach Aid Trust
        </span>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industries standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </h1>
      <div className="flex justify-center">
        <Link href="https://www.gofundme.com/f/emergency-bangladesh-floods-appeal-2022">
          <div className="flex justify-center rounded-full p-2 w-6/12 md:w-3/12 xl:w-2/12 border-4 text-center text-md md:text-xl	border-orange-400 animate-pulse hover:border-black hover:bg-white hover:text-black">
            <FcDonate className="text-2xl md:text-4xl inline pr-1" />
            <h1>Donate</h1>
          </div>
        </Link>
      </div>
      <div className="flex justify-center my-10">
        {/* change xl:grid-cols-2 to xl:grid-cols-3 if theres 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 col-span-1 mt-5">
          {projects.map((project) => {
            return (
              <div key={project.title}>
                <HomepageCard
                  title={project.title}
                  date={project.date}
                  image={project.displayImage}
                  description={project.description}
                  id={project.id}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-700">
        <div className="text-center text-white p-6">
          <p className="text-4xl p-4">Make a difference</p>
          <p className="text-xl">
            Your help and generosity can make a positive change for those who
            desperately need our support and assistance where it’s needed most.
          </p>
          <button className="rounded-full border-4 border-orange-400 w-48 p-1 m-2 hover:border-black hover:bg-white hover:text-black">
            DONATE NOW
          </button>
        </div>

        <div className="text-center text-white p-6">
          <p className="text-4xl p-4">Our Mission</p>
          <p className="text-xl">
            To end poverty and hunger in a world of inequality and injustice we
            can together make that difference that really counts.
          </p>
          <button className="rounded-full border-4 border-orange-400 w-48 p-1 m-2 hover:border-black hover:bg-white hover:text-black">
            FIND OUT MORE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

export async function getStaticProps() {
  const projects = await getFeaturedProjects();

  return {
    props: {
      projects,
    },
  };
}
