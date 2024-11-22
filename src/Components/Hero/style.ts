import styled from "styled-components";
import {
  bodyMD,
  bodyXL,
  bodyXXL,
  breakpoint,
} from "../../assets/styles/global";

export const HeroContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  min-height: 356px;

  @media screen and (max-width: ${breakpoint.tablet}) {
    gap: 16px;

    margin-top: 0;
    justify-content: flex-start;

    min-height: fit-content;

    height: calc(98vh - 100px);

    justify-content: center;
  }
`;

export const HeadinglineContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoint.tablet}) {
    gap: 8px;
  }
`;

export const WelcomeText = styled(bodyMD).attrs({ as: "p" })`
  @media (max-width: ${breakpoint.tablet}) {
    font-size: 14px;
  }
`;

export const NameText = styled(bodyXXL)`
  font-weight: bold;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 32px;
  }
`;

export const CareerText = styled(bodyXL)`
  @media (max-width: ${breakpoint.tablet}) {
    font-size: 24px;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  gap: 32px;

  img:hover {
    filter: invert(55%) sepia(96%) saturate(1143%) hue-rotate(351deg)
      brightness(101%) contrast(85%);
  }

  @media (max-width: ${breakpoint.tablet}) {
    gap: 24px;

    img {
      width: 24px;
    }
  }
`;
