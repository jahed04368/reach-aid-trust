import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ img, desc, projectName, urllink, id }) => {
  return (
    <div className="w-full p-2">
      <div className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-full bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
        <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4 text-black">
          <div className="grid lg:grid-cols-4 p-4 w-full shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
            <div className="row-span-1 md:col-span-3">
              <p className="text-2xl font-bold pb-2">{projectName}</p>
              {urllink && (
                <Link
                  href={`/projects/${id}`}
                  target={'_blank'}
                  rel="noreferrer"
                  className=""
                >
                  <a className="text-blue-300 text- italic">
                    {`Go to ${projectName}`}
                  </a>
                </Link>
              )}
              <p className="text-lg pt-2 pr-2.5">{desc}</p>
            </div>
            <div className="row-span-1 md:col-span-1 py-3">
              <NextImage
                src={`/${img}`}
                width={640}
                height={360}
                alt={projectName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
