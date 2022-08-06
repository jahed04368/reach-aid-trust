/* eslint-disable react/style-prop-object */
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="m-16 text-xl text-center md:text-start ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
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
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              {/* <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div> */}
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
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
