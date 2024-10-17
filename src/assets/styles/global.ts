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
