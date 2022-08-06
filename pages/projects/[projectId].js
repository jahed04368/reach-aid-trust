import { getFeaturedProjects, getProjectById } from '../../helpers/api-util';

const ProjectDetailPage = (props) => {
  const { title, date, descripation, id, image, isFeatured, location } =
    props.selectedProject;

  if (!props.selectedProject) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>{id}</h2>
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
