import React from 'react';
import HomepageCard from '../../components/HomepageCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { FcDonate } from 'react-icons/fc';
import { getFeaturedProjects } from '../../helpers/api-util';
import Link from 'next/link';

const Donate = ({ projects }) => {
  return (
    <div className="text-black">
      <Navbar />
      <h1 className="my-8 md:mt-16 px-3 md:px-3 xl:px-8 text-center italic text-xl">
        {
          'These are our current ongoing projects, please donate generously to all the projects or to projects of your choice.'
        }
      </h1>
      <div className="flex justify-center my-10">
        {/* change xl:grid-cols-2 to xl:grid-cols-3 if theres 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 col-span-1 mt-5">
          {projects.map((project) => {
            return (
              <div key={project.title}>
                <HomepageCard
                  title={project.title}
                  date={project.date}
                  image={project.image}
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

export default Donate;

export async function getStaticProps() {
  const projects = await getFeaturedProjects();

  return {
    props: {
      projects,
    },
  };
}
