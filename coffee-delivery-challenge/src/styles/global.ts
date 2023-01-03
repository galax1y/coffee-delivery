import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

body {
    overflow-y: overlay;

    background-color: ${(props) => props.theme.background};
}

h1, h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
}

label {
    color: ${(props) => props.theme['base-label']};
}

button {
    line-height: 0;
}

`
