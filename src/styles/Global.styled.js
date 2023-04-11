import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${props => (props.darkMode ? 'white' : 'black')};
  }

  ::placeholder{
    font-size:12px;
  }
`

export const Container=styled.div`
 max-width:1980px;
 min-height:100vh;
  margin: 0 auto;;

`

export const Row =styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;`

export const Colum=styled.div`
flex-basis: 100%;

`