import styled from "styled-components";
import { bodyMD, headingLG, headingXXL } from "../../assets/styles/global";

export const ContainerContacts = styled.div`
  display: flex;
  gap: 127px;
`;

export const ContactsTitle = styled(headingXXL)`
  font-weight: bold;
  margin-bottom: 48px;
`;

export const Headline = styled(headingLG)``;

export const MainContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 535px;
`;

export const Contact = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ContactsGroup = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const TextContact = styled(bodyMD).attrs({ as: "p" })``;

export const IconSocials = styled.a`
  width: fit-content;
  height: fit-content;
  text-decoration: none;

  img:hover {
    filter: invert(55%) sepia(96%) saturate(1143%) hue-rotate(351deg)
      brightness(101%) contrast(85%);
  }
`;

export const SocialContacts = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  max-width: 534px;

  ${ContactsGroup} {
    flex-direction: row;
  }
`;
