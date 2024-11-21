import styled from "styled-components";
import { breakpoint, colors, headingSM } from "../../assets/styles/global";

export const TextTag = styled(headingSM)`
  font-weight: bold;
  width: fit-content;
  line-height: 100%;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const ContainerTag = styled.div`
  background-color: ${colors.traditional700};
  width: fit-content;
  min-width: 50px;
  padding: 8px;
  border-radius: 4px;

  display: flex;

  justify-content: center;

  &:hover {
    background-color: ${colors.modern600};
    transition: background-color 0.5s ease-out;
  }

  @media (max-width: ${breakpoint.tablet}) {
    padding: 6px;
  }
`;
