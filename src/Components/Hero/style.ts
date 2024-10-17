import styled from "styled-components";
import { bodyMD, bodyXL, bodyXXL } from "../../assets/styles/global";

export const HeroContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  min-height: 356px;
`;

export const WelcomeText = styled(bodyMD).attrs({ as: "p" })``;

export const NameText = styled(bodyXXL)`
  font-weight: bold;
`;

export const CareerText = styled(bodyXL)``;

export const ContainerIcon = styled.div`
  display: flex;
  gap: 32px;

  img:hover {
    filter: invert(55%) sepia(96%) saturate(1143%) hue-rotate(351deg)
      brightness(101%) contrast(85%);
  }
`;
