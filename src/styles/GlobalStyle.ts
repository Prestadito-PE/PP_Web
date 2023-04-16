import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap');
    font-weight: normal;
    font-style: normal;
  }

  body{
    font-family: 'Inter', sans-serif;
    margin: 0;
    background-color: #F6F6F6;
  }

`;