import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    text-decoration: none;
}

body{
    background: #fff;
}

h1{
    color: #FFBB13;
    font-size: 2rem;
}

a{
  font-size: 2rem;
  color: #2f73e0;
  font-weight: bold;
}

img{
  max-width: 800px;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    min-height: 100vh;
}

`

export default GlobalStyles