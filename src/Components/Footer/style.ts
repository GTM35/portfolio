import styled from "styled-components";
import { breakpoint, headingSM } from "../../assets/styles/global";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-top: 144px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 128px;
  }
`;

export const TextFooter = styled(headingSM)`
  font-weight: bold;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 12px;
  }
`;
