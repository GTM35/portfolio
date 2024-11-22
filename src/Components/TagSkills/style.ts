import styled from "styled-components";
import { bodySM, breakpoint, colors } from "../../assets/styles/global";

export const ContainerTagSkill = styled.div`
  border: 2px solid ${colors.traditional500};
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const TextTagskill = styled(bodySM)`
  font-weight: bold;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 12px;
  }
`;
