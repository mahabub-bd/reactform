import styled from "styled-components";


export const LoginForm=styled.form`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:60vh;
`


export const Label=styled.label`

display: block;
  margin-bottom: 5px;
  font-weight: bold;

  :error{
    color: #ff0000;
  font-size: 12px;
  margin-left: 5px;
  }
 :focus{
  color:#007bff;
 }
`;

export const Btn=styled.button`
 display: inline-block;
  background-color: #007bff;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.1rem 5rem;
  border: none;
  cursor: pointer;

`


export const Input=styled.input`
display:block;
font-size: 16px;
padding: 5px 10px;
border: 1px solid #ccc;
border-radius: 5px;

::placeholder{
  font-size:12px
}

:focus{
outline: none;
border-color: #007bff;
color:#007bff;





































































































































































































































































































































}

`

export const Button=styled.div`
 background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
`