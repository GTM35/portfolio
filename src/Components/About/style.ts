import styled from "styled-components";
import { bodyMD, breakpoint, headingXXL } from "../../assets/styles/global";

export const ContainerAbout = styled.section`
  margin: 144px 0;

  @media (max-width: ${breakpoint.tablet}) {
    margin: 0 0 90px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 127px;

  @media (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const AboutTitle = styled(headingXXL)`
  font-weight: bold;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 23px;
    margin-bottom: 48px;
  }
`;

export const AboutInformation = styled.div`
  width: 100%;
  max-width: 540px;
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 0;
  }
`;

export const TextInformation = styled(bodyMD).attrs({ as: "p" })`
  min-height: 144px;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 14px;
  }
`;

export const ContainerTag = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
