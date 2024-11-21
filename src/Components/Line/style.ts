import styled from "styled-components";
import { breakpoint } from "../../assets/styles/global";

export const LineSeparator = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(47, 157, 255, 1) 40%,
    rgba(28, 94, 153, 0) 100%
  );

  margin-bottom: 40px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`;
