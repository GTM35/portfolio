import TagSkills from "../TagSkills";
import {
  ContainerButtons,
  ContainerProject,
  ContainerSkills,
  CoverProject,
  TextDescription,
  TitleProject,
} from "./style";
import Button from "../Button";

interface Props {
  ImageProject: string;
  titleProject: string;
  stack: string[];
  deploy: string;
  github: string;
  description: string;
}

const Project = ({
  ImageProject,
  titleProject,
  stack,
  deploy,
  github,
  description,
}: Props) => {
  return (
    <ContainerProject>
      <TitleProject>{titleProject}</TitleProject>
      <CoverProject src={ImageProject} alt="" />
      <ContainerSkills>
        {stack.map((item) => (
          <TagSkills>{item}</TagSkills>
        ))}
      </ContainerSkills>

      <TextDescription>{description}</TextDescription>

      <ContainerButtons>
        <Button link={github}>Github</Button>
        <Button link={deploy}>Deploy</Button>
      </ContainerButtons>
    </ContainerProject>
  );
};

export default Project;
