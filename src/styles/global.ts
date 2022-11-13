import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  body {
  background-color: ${(props) => props.theme['base-background']};
  }

  p, li, code {
    color: ${(props) => props.theme['base-text']};
  }

  li {
    margin-left: 2rem;
  }

  h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme['base-title']};
  }

  svg {
    color: white;
  }

  a {
      border-bottom: 1px solid transparent;
    &:hover {

      border-color: ${(props) => props.theme.blue};
    }
    
  }
`
