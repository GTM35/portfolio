import styled from "styled-components";
import {
  bodyMD,
  breakpoint,
  headingLG,
  headingXXL,
} from "../../assets/styles/global";

export const ContainerContacts = styled.div`
  display: flex;
  gap: 127px;

  @media (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    gap: 48px;
  }
`;

export const ContactsTitle = styled(headingXXL)`
  font-weight: bold;
  margin-bottom: 48px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-bottom: 48px;
    font-size: 23px;
  }
`;

export const Headline = styled(headingLG)`
  @media (max-width: ${breakpoint.tablet}) {
    font-size: 16px;
    width: 100%;
  }
`;

export const MainContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 535px;

  @media (max-width: ${breakpoint.tablet}) {
    gap: 16px;
  }
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

  @media (max-width: ${breakpoint.tablet}) {
    gap: 16px;
  }
`;

export const TextContact = styled(bodyMD).attrs({ as: "p" })`
  @media (max-width: ${breakpoint.tablet}) {
    font-size: 14px;
  }
`;

export const IconSocials = styled.a`
  width: fit-content;
  height: fit-content;
  text-decoration: none;

  img:hover {
    filter: invert(55%) sepia(96%) saturate(1143%) hue-rotate(351deg)
      brightness(101%) contrast(85%);
  }

  @media (max-width: ${breakpoint.tablet}) {
    width: 22px;
    height: 22px;

    img {
      width: 100%;
      height: 100%;
    }
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

  @media (max-width: ${breakpoint.tablet}) {
    gap: 16px;
  }
`;
