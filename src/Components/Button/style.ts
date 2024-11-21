import styled from "styled-components";
import { breakpoint, colors } from "../../assets/styles/global";

export const ButtonContainer = styled.a`
  font-family: "Roboto Mono", serif;
  font-size: 16px;
  line-height: 150%;
  font-weight: bold;
  color: ${colors.elegance50};
  cursor: pointer;
  background-color: ${colors.traditional700};
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: ${colors.modern500};
  }

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 14px;
  }
`;
