import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    /* font-family: 'Poppins', sans-serif; */
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
    /* font-family: 'Dancing Script', cursive; */

    * {
        box-sizing: border-box;
    }
    body {
        color: #00252e;
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
        padding: 0;
    }
    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
