import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { getFeaturedProjects, getProjectById } from '../../helpers/api-util';
import Image from 'next/image';

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

            <div className="flex">
              <p className="font-semibold pr-2">{'Location -'}</p>
              <p>{location}</p>
            </div>

            <div className="flex">
              <p className="font-semibold pr-2">{'Date -'}</p>
              <time>{humanReadableDate}</time>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src={`/${images[0]}`}
              alt="office content 1"
              width={640}
              height={300}
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={`/${images[1]}`}
              alt="office content 2"
              width={640}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {images.map((image) => {
              return (
                <div className="flex flex-wrap w-1/3" key={image}>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={`/${image}`}
                      width={640}
                      height={300}
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
