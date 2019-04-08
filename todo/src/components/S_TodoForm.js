import styled from 'styled-components'

const FormContainer = styled.div `
  grid-area: F;

`

const Form = styled.form `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  font-size: 30px;

  button {
    height: 40px;
    width: 40%;
    border: none;
    background: #5bc0de;
    font-size: 16px;
    margin: 10px;
    color: white;
  }

  input {
    width: 60%;
    height: 40px;
    border: none;
    text-align: center;
    background: #428bca;
    font-size: 16px;
    &::placeholder {
      color: white;
    }
  }
`


export { FormContainer, Form }
