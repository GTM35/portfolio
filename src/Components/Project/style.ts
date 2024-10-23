import styled from "styled-components";
import { bodySM, headingLG } from "../../assets/styles/global";

export const TitleProject = styled(headingLG)`
  font-weight: bold;
`;

export const ContainerProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 315px;
`;

export const ContainerSkills = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
`;

export const CoverProject = styled.img`
  width: 100%;
  max-width: 315px;
  border-radius: 8px;
`;

export const TextDescription = styled(bodySM)`
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
`;
