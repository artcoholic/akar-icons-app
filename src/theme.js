import { createGlobalStyle } from 'styled-components';

const light = {
  colors: {
    primary: '#10284B',
    secondary: '#F6F6EB',
    tertiary: '#4CAEFF',
    boxShadow: 'rgba(15,23,32,0.15)',
    pattern: '#e2e2e2',
  }
}

const gray = {
  colors: {
    primary: '#35322C',
    secondary: '#EDEBD7',
    tertiary: '#FFB224',
    boxShadow: 'rgba(15,23,32,0.15)',
    pattern: '#f6f6f6',
  }
}

const dark = {
  colors: {
    primary: '#2A4729',
    secondary: '#F7FECD',
    tertiary: '#CCDEAB',
    boxShadow: 'rgba(15,23,32,0)',
    pattern: '#e2e2e2',
  }
}

export const theme = {
  breakpoints: ['768px'],
}

export const lightTheme = { ...theme, ...light };
export const darkTheme = { ...theme, ...dark };
export const grayTheme = { ...theme, ...gray };

export const GlobalStyles = createGlobalStyle`
  * {
    transition: background 300ms cubic-bezier(.23,1,.32,1), box-shadow 300ms cubic-bezier(.23,1,.32,1), transform 300ms cubic-bezier(.23,1,.32,1);
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.secondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0
  }

  a, a:hover {
    text-decoration: none;
  }

  button, .button {
    outline: none;
    &:focus {
      box-shadow: 0 0 0 4px deepskyblue;
    }
    &:active {
      box-shadow: none;
    }
  }

  .ai {
    path, rect, circle, ellipse {
      vector-effect: non-scaling-stroke;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }
`