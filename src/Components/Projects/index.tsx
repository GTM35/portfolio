import Line from "../Line";
import Project from "../Project";
import { ContainerProject, ProjectsTitle } from "./style";

const Projects = () => {
  return (
    <>
      <Line />
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ContainerProject>
        <Project />
        <Project />
        <Project />
      </ContainerProject>
    </>
  );
};

export default Projects;
