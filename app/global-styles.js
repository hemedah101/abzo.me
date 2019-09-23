import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    color: #2b1a1a;
    min-height: 100%;
    min-width: 100%;
  }

  #footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  font-weight: 300;
  }

  p,
  label {
    line-height: 1.5em;
  }

  li{
    margin-bottom: 0.5em;
  }
`;

export default GlobalStyle;
