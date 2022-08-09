import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { getAllProjects } from '../../helpers/api-util';
import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';

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
      <div className="text-black">
        <div className="container flex flex-wrap items-center mx-auto px-2 py-10 lg:pt-20">
          <h1 className="text-3xl pb-2 pl-3">
            {
              'Please donate on all projects or specific project of your choice.'
            }
          </h1>

          {projects.map((project) => {
            {
              {
                return (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    desc={project.description}
                    projectName={project.title}
                    urllink={'https://todo-jahed04368.netlify.app/'}
                    img={project.displayImage}
                  />
                );
              }
            }
          })}
        </div>
      </div>
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
