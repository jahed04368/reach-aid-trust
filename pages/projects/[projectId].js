import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { getFeaturedProjects, getProjectById } from '../../helpers/api-util';
import Image from 'next/image';
import Head from 'next/head';

const ProjectDetailPage = (props) => {
  const { title, date, description, id, image, isFeatured, location, images } =
    props.selectedProject;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (!props.selectedProject) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Reach Aid Trust</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navbar />
      </div>

      <section className="bg-white dark:bg-gray-900 w-full">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="mb-4">{description}</p>
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700 ">
              <p className="pr- font-medium text-gray-900 dark:text-white w-3/12 sm:w-2/12">
                {'Location'}
              </p>
              <p className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 w-9/12">
                {location}
              </p>
            </div>
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <p className="pr- font-medium text-gray-900 dark:text-white w-3/12 sm:w-2/12">
                {'Date'}
              </p>
              <p className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 w-9/12">
                {humanReadableDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {images.map((image) => {
              return (
                <div
                  className="flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4"
                  key={image}
                >
                  <div className="col-span-1 sm:col-span-3 md:col-span-3 rounded-lg shadow-lg bg-white max-w-sm mx-4 hover:bg-sky-100 hover:border-2 my-2">
                    <Image
                      className="rounded"
                      src={`/${image}`}
                      alt=""
                      width={400}
                      height={250}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetailPage;

export async function getStaticProps(context) {
  const projectId = context.params.projectId;
  const project = await getProjectById(projectId);

  return {
    props: {
      selectedProject: project,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const projects = await getFeaturedProjects();

  const paths = projects.map((project) => ({
    params: { projectId: project.id },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
