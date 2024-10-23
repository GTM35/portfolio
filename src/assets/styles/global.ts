import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  elegance50: "#EEF6FA",
  traditional500: "#2F9DFF",
  traditional700: "#136CED",
  traditional950: "#000814",
  modern500: "#EC8C22",
  modern600: "#DD7319",
};

export const bodyMD = styled.a`
  line-height: 150%;
  font-family: "Roboto Mono", serif;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.elegance50};
`;

export const bodyXXL = styled.p`
  font-family: "Roboto Mono", serif;
  font-size: 36px;
  line-height: 150%;
  color: ${colors.elegance50};
  font-weight: 400;
`;

export const bodyXL = styled.p`
  font-family: "Roboto Mono", serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 150%;
  color: ${colors.elegance50};
`;

export const headingXXL = styled.h2`
  font-family: "Roboto Condensed", serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 120%;
  color: ${colors.elegance50};
`;

export const headingSM = styled.p`
  font-family: "Roboto Condensed", serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  color: ${colors.elegance50};
`;

export const GlobalStyle = createGlobalStyle`
    *   {
        margin:0;
        padding:0;
    }

    body {
        background-color:${colors.traditional950};
    }

    .container{
        padding: 0px 64px;
    }
`;
