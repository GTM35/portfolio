import Line from "../Line";
import Tag from "../Tag";
import {
  AboutInformation,
  AboutTitle,
  AboutWrapper,
  ContainerAbout,
  ContainerTag,
  TextInformation,
} from "./style";

const About = () => {
  return (
    <ContainerAbout id="About">
      <Line />
      <AboutTitle>Sobre</AboutTitle>

      <AboutWrapper>
        <AboutInformation>
          <TextInformation>
            Formado em Análise e Desenvolvimento de Sistemas e atualmente
            cursando Engenharia de Software, venho me especializando em
            desenvolvimento web, com um forte compromisso em criar interfaces
            funcionais e envolventes, utilizando as seguintes tecnologias:
          </TextInformation>

          <ContainerTag>
            <Tag text="HTML" />
            <Tag text="GIT" />
            <Tag text="CSS" />
            <Tag text="SASS" />
            <Tag text="LESS" />
            <Tag text="Styled-Components" />
            <Tag text="Javascript" />
            <Tag text="TypeScript" />
            <Tag text="React" />
            <Tag text="VueJS" />
            <Tag text="Jest" />
          </ContainerTag>
        </AboutInformation>

        <AboutInformation>
          <TextInformation>
            Complementando minhas habilidades técnicas, destaco-me por ter um
            perfil comportamental dinâmico, moldado durante 4 anos em que atuei
            como Analista de Planejamento em Call center. Essa vivência me
            permitiu aprimorar as seguintes habilidades essenciais para minha
            carreira:
          </TextInformation>

          <ContainerTag>
            <Tag text="Pensamento crítico" />
            <Tag text="Resolução de problemas" />
            <Tag text="Autogestão" />
            <Tag text="Resiliência" />
            <Tag text="Empatia" />
            <Tag text="Relacionamento interpessoal" />
            <Tag text="Trabalho em equipe" />
          </ContainerTag>
        </AboutInformation>
      </AboutWrapper>
    </ContainerAbout>
  );
};

export default About;
