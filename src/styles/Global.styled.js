import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    color: ${props => (props.darkMode ? 'white' : 'black')};
    font-family: 'Comfortaa', cursive;
  }
  
  


  ::placeholder{
    font-size:12px;
  }
`

export const Container=styled.div`
 max-width:1980px;
 margin: 0 auto;

`

export const Row =styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;`

export const Colum=styled.div`
flex-basis: 100%;

`