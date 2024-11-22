import TagSkills from "../TagSkills";
import {
  ContainerButtons,
  ContainerProject,
  ContainerSkills,
  CoverProject,
  TextDescription,
  TitleProject,
} from "./style";
import imageProject from "../../assets/images/cover-project.png";
import Button from "../Button";

const Project = () => {
  return (
    <ContainerProject>
      <TitleProject>Título</TitleProject>
      <CoverProject src={imageProject} alt="" />
      <ContainerSkills>
        <TagSkills>HTML</TagSkills>
        <TagSkills>HTML</TagSkills>
        <TagSkills>HTML</TagSkills>
        <TagSkills>HTML</TagSkills>
        <TagSkills>HTML</TagSkills>
      </ContainerSkills>

      <TextDescription>
        Lorem ipsum dolor sit amet consectetur. Sit nec pretium turpis eget nisi
        in. Sit in lobortis est urna dictum molestie nisl id.
      </TextDescription>

      <ContainerButtons>
        <Button>Github</Button>
        <Button>Deploy</Button>
      </ContainerButtons>
    </ContainerProject>
  );
};

export default Project;
