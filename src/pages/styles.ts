import styled from 'styled-components'

import theme from '../styles/theme'

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
  background: wheat;
  padding: 10px;
  width: 400px;

  max-width: 450px;
  min-height: 300px;
  padding: 2.5rem 3rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.5);
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: rgb(66, 59, 50);
  text-align: center;
  margin: 20px 0 40px;
`

export const P = styled.p`
  font-size: 1.8rem;
  color: ${theme.primaryColor};

  span {
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    color: rgb(66, 59, 60);
  }
`

export const Button = styled.button`
  width: 50%;
  height: 6rem;
  font-size: 2.3rem;
  font-weight: 500;

  font-family: Poppins, sans-serif;
  border: 0.1rem solid rgb(249, 168, 38);
  border-radius: 1rem;
  background: rgb(249, 168, 38);
  margin-top: 20px;

  :hover {
    filter: contrast(115%);
  }

  :active {
    filter: contrast(105%);
  }
`
export default Container
