import { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';
import Manrope from './fonts/Manrope-VariableFont_wght.ttf';

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark-grayish-blue: hsl(217, 19%, 35%);
        --desaturated-dark-blue: hsl(214, 17%, 51%);
        --grayish-blue: hsl(212, 23%, 69%);
        --light-grayish-blue: hsl(210, 46%, 95%);
        --white: #fff;
    }

    @font-face {
        font-family: 'Manrope';
        src: url(${Manrope})
            format('truetype-variations');
        font-weight: 500, 700;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Manrope', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 13px;
        color: var(--dark-grayish-blue);
    }

    h1 {
        font-size: 18px;
    
        ${up('md')} {
            font-size: 24px;
        }
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }
`;
