import { ButtonContainer } from "./style";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <>
      <ButtonContainer>{children}</ButtonContainer>
    </>
  );
};

export default Button;
