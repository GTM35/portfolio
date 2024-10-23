import { ContainerTag, TextTag } from "./style";

type Props = {
  text: string;
  typeTag: "default" | "solid";
};

const Tag = ({ text }: Props) => {
  return (
    <ContainerTag>
      <TextTag>{text}</TextTag>
    </ContainerTag>
  );
};

export default Tag;
