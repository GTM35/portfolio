import styled from "styled-components";
import { breakpoint, headingXXL } from "../../assets/styles/global";

export const ContainerProject = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 144px;

  @media (max-width: ${breakpoint.tablet}) {
    gap: 40px;
    margin-bottom: 128px;
  }
`;

export const ProjectsTitle = styled(headingXXL)`
  font-weight: bold;
  margin-bottom: 48px;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 23px;
    margin-bottom: 48px;
  }
`;
