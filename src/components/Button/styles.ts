import styled from 'styled-components'

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
