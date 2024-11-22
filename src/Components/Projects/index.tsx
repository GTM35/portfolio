import Line from "../Line";
import Project from "../Project";
import { ContainerProject, ProjectsTitle } from "./style";

const Projects = () => {
  return (
    <>
      <Line />
      <ProjectsTitle id="Projects">Projetos</ProjectsTitle>
      <ContainerProject>
        <Project />
        <Project />
        <Project />
      </ContainerProject>
    </>
  );
};

export default Projects;
