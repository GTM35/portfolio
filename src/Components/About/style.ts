import styled from "styled-components";
import { bodyMD, headingXXL } from "../../assets/styles/global";

export const ContainerAbout = styled.section`
  margin-top: 144px;
  margin-bottom: 200px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 127px;
`;

export const AboutTitle = styled(headingXXL)`
  font-weight: bold;
`;

export const AboutInformation = styled.div`
  width: 100%;
  max-width: 540px;
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TextInformation = styled(bodyMD).attrs({ as: "p" })``;

export const ContainerTag = styled.div`
  display: flex;
  gap: 16px;
`;
