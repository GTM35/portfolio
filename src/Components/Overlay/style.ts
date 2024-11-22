import styled from "styled-components";
import { breakpoint, colors } from "../../assets/styles/global";

export const ContainerOverlay = styled.div`
  @media (max-width: ${breakpoint.tablet}) {
    height: 100%;
    width: 100%;
    background-color: ${colors.traditional950};
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
