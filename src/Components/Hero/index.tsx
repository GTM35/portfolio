import iconGit from "../../assets/images/icon-github.svg";
import iconLinkedin from "../../assets/images/icon-linkedin.svg";
import iconTwitch from "../../assets/images/icon-twitch.svg";

import {
  CareerText,
  ContainerIcon,
  HeadinglineContainer,
  HeroContainer,
  NameText,
  WelcomeText,
} from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <HeadinglineContainer>
        <WelcomeText>Olá, visitante!</WelcomeText>
        <NameText>Meu nome é Gustavo Mazarello</NameText>
        <CareerText>Desenvolvedor Front-end</CareerText>
      </HeadinglineContainer>

      <ContainerIcon>
        <a href="https://github.com/GTM35" target="_blank">
          <img src={iconGit} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/gtm035/" target="_blank">
          <img src={iconLinkedin} alt="" />
        </a>
        <a href="https://www.twitch.tv/gustavo_coder" target="_blank">
          <img src={iconTwitch} alt="" />
        </a>
      </ContainerIcon>
    </HeroContainer>
  );
};

export default Hero;
