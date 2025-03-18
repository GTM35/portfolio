import { ButtonContainer } from "./style";

type Props = {
  children: string;
  link: string;
};

const Button = ({ children, link }: Props) => {
  return (
    <ButtonContainer href={link} target="_blank">
      {children}
    </ButtonContainer>
  );
};

export default Button;
