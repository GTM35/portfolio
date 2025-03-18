import imageProject1 from "/images/Projeto1/efood.png";
import imageProject2 from "/images/Projeto2/portfolio.png";
import imageProject3 from "/images/Projeto3/todo.png";

import Line from "../Line";
import Project from "../Project";
import { ContainerProject, ProjectsTitle } from "./style";

const Projects = () => {
  return (
    <>
      <Line />
      <ProjectsTitle id="Projects">Projetos</ProjectsTitle>
      <ContainerProject>
        <Project
          ImageProject={imageProject1}
          titleProject="Efood"
          stack={["ReactJS", "Redux", "Typescript", "Styled Components"]}
          deploy="https://efood-nine-alpha.vercel.app/"
          github="https://github.com/GTM35/efood"
          description="Efood trata-se de um site de delivery de comidas, que foca em experiências gastronômicas de alta qualidade."
        />
        <Project
          ImageProject={imageProject2}
          titleProject="Portfólio"
          stack={["ReactJS", "Typescript", "Styled Components", "Figma"]}
          deploy="https://gcoder.com.br/"
          github="https://github.com/GTM35/portfolio"
          description="Portfólio desenvolvido com o objetivo de apresentar projetos e destacar experiências e
habilidades técnicas para os visitantes."
        />
        <Project
          ImageProject={imageProject3}
          titleProject="To-do list"
          stack={["ReactJS", "Typescript", "CSS"]}
          deploy="https://to-do-list-lemon-one.vercel.app/"
          github="https://github.com/GTM35/to-do-list"
          description="To-do List criado em ReactJS, permitindo que os usuários gerenciem suas tarefas de forma simples e eficiente."
        />
      </ContainerProject>
    </>
  );
};

export default Projects;
