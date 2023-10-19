import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/selawik');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: selawik, sans-serif;
  color: #003349;
  background-color: transparent;
  font-weight: 200;
}

body {
  --background-color: #ffffff;
  --foreground-color: #b2bcc2;
  --side-background-color: #f6f6f6;
  --side-foreground-color: #595959;
  --heading-color: #003349;
  --link-color: #ff5600;
  background-color: var(--background-color);
  color: var(--foreground-color);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--heading-color);
  font-family: selawik, sans-serif;
  font-weight: 400;
}

a, button {
  color: var(--link-color);
  text-decoration: underline;
}

a:hover, button:hover {
  text-decoration: none;
}

strong {
  font-weight: 700;
}

aside {
  background-color: var(--side-background-color);
  color: var(--side-foreground-color);
}
`;


