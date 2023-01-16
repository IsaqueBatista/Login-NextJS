import styled from 'styled-components'

export const Label = styled.label`
  width: 48px;
  height: 23px;

  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  background-color: wheat;
  background-color: white;
  font-size: 1.85rem;
  font-weight: 400;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: none;
  border-bottom: 0.1rem solid rgb(66, 59, 50);
  margin-bottom: 10px;
  outline: none;
  height: 3rem;
  ::placeholder {
    font-size: small;
  }
`
