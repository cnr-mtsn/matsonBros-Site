import React from 'react';
import { createGlobalStyle } from "styled-components";
import Nav from '../components/Nav';
import styled from 'styled-components';

const theme = {
  colors: {
    black: "#1C1018",
    blue: "#3581B8",
    lightBlue: "#B0C4DE",
    offWhite: "#EDEBE6",
    white: "#F0FFFF",
    orange: "#EE6C4D",
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }
  body  {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    background: ${theme.colors.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header {
    position: relative;
    top: 0;
    margin: 0;
    left: 0;
    right: 0;
  }

  footer {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const StyledPageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const PageWrapper = ({ children }) => (
	<StyledPageWrapper>
		<Nav />
		{children}
	</StyledPageWrapper>
);

export { theme, GlobalStyle, PageWrapper };
