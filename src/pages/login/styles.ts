import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('./assets/background.svg') center right / 45vh no-repeat;

  align-items: center;

  display: flex;
  justify-content: center;

  justify-content: space-around;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: wheat;
  padding: 10px;
  width: 400px;
  max-width: 480px;
  min-height: 480px;
  padding: 2.5rem 3rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    flex-direction: column;
  }
`
export const H1 = styled.h1`
  height: 60px;

  font-style: normal;
  font-weight: 550;
  font-size: 35px;
  line-height: 60px;
  color: rgb(66, 59, 50);
  text-align: center;
`

export const Label = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 35px;

  span {
    color: red;
    font-size: 13px;
    display: block;
    position: absolute;
    width: 350px;
    max-width: 450px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background-color: wheat;
  background-color: white;
  font-weight: 400;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: none;
  border-bottom: 0.1rem solid rgb(66, 59, 50);
  outline: none;

  ::placeholder {
    font-size: small;
  }
`

export const Button = styled.button`
  background: rgb(249, 168, 38);
  border-radius: 50px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin: 10px 0;
`
export default Container
