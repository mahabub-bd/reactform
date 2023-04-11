import styled from "styled-components";

export const  FormContainer=styled.div`
display: flex;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
  height: 100vh;
  font-family: 'Comfortaa', cursive; /* set a height for the parent container */
`
export const LoginForm=styled.form`
  width: 450px; /* set a width for the child element */
  height: 400px; /* set a height for the child element */
  
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:10px;

`


export const Label=styled.label`

display: block;
  margin-top: 5px;
  font-weight: 400;

  :empty{
    color: #ff0000;
  font-size: 12px;
  margin-left: 5px;
  }
 :focus{
  color:#007bff;
 }
`;

export const Btn=styled.button`

  align-items: center;
  background-color: #0A66C2;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 25px;
  padding-right: 25px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;


:focus,:hover { 
  background-color: #16437E;
  color: #ffffff;
}

:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

:disabled { 
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
}
`


export const Input=styled.input`
display:block;
font-size: 16px;
padding: 5px 15px;
border: 1px solid #ccc;
border-radius: 5px;

::placeholder{
  font-size:12px
}



:focus{
outline: none;
border-color: #007bff;

}

`


export const ErrorMessage=styled.p`
color:#ff0000;

font-weight:200;
font-size: 12px;
`