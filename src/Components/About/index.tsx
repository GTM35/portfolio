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
    <ContainerAbout>
      <Line />
      <AboutTitle>Sobre</AboutTitle>

      <AboutWrapper>
        <AboutInformation>
          <TextInformation>
            Lorem ipsum dolor sit amet consectetur. Elit velit non nam amet id
            netus eleifend aliquam. Tellus ut sed sodales aliquam bibendum
            habitant aliquet scelerisque. Nisl condimentum faucibus aliquam
            aliquam nunc tricies.
          </TextInformation>

          <ContainerTag>
            <Tag text="HTML" />
            <Tag text="CSS" />
            <Tag text="Javascript" />
            <Tag text="Git" />
            <Tag text="Grunt" />
            <Tag text="Gulp" />
          </ContainerTag>
        </AboutInformation>

        <AboutInformation>
          <TextInformation>
            Lorem ipsum dolor sit amet consectetur. Elit velit non nam amet id
            netus eleifend aliquam. Tellus ut sed sodales aliquam bibendum
            habitant aliquet scelerisque. Nisl condimentum faucibus aliquam
            aliquam nunc tricies.
          </TextInformation>

          <ContainerTag>
            <Tag text="HTML" />
            <Tag text="CSS" />
            <Tag text="Javascript" />
            <Tag text="Git" />
            <Tag text="Grunt" />
            <Tag text="Gulp" />
          </ContainerTag>
        </AboutInformation>
      </AboutWrapper>
    </ContainerAbout>
  );
};

export default About;
