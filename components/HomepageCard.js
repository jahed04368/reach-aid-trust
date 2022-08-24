import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Card = (props) => {
  const { image, title, description, date, id } = props;
  console.log(props);

  const exploreLink = `/projects/${id}`;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-2 hover:border-black hover:bg-white hover:border-2">
      {/* <div className="flex justify-center"> */}
      {console.log(image)}

      <Link href={`/projects/${props.id}`}>
        <Image
          className="rounded-t-lg w-full h-80 "
          src={`/${image}`}
          alt=""
          width={400}
          height={250}
        />
      </Link>
      {/* </div> */}
      <div className="p-5">
        <div className="block flex">
          <Link href={exploreLink}>
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <div className="flex block justify-start">
                <time className="text-black">{humanReadableDate}</time>
              </div>
            </div>
          </Link>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
        <Link href={exploreLink}>
          <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <h1 className="px-2">Read More</h1>
            <AiOutlineArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
