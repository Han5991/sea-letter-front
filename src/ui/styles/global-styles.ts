'use client';

import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  a:link, a:visited {
    text-decoration: none;
  }

`;

export default GlobalStyle;
