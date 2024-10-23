import styled from "styled-components";
import { colors, headingSM } from "../../assets/styles/global";

export const TextTag = styled(headingSM)`
  font-weight: bold;
  width: fit-content;
  line-height: 100%;
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
`;
