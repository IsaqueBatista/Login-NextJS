import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%; // 1rem = 10px
    }

    html, body {
        width: 100%;
        height: 100%;
        font-family: ${theme.fonts.primary};

    }

    body {
        background: ${theme.background};
    }

    h1 {
        font-weight: ${theme.fonts.weight.bold};
        color: ${theme.secondColor}
    }

    ul {
        list-style: none;
    }

    a {
        color: ${theme.primaryColor};
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`
