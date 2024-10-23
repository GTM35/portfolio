import { ContainerTagSkill, TextTagskill } from "./style";

type Props = {
  children: string;
};

const TagSkills = ({ children }: Props) => {
  return (
    <ContainerTagSkill>
      <TextTagskill>{children}</TextTagskill>
    </ContainerTagSkill>
  );
};

export default TagSkills;
