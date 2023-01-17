import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { Button } from 'components/Button'

import * as S from './styles'

export interface HomeProps {
  name: string
  email: string
}
interface User {
  name: string
  email: string
  password: string
}

export default function Home() {
  const [user, setUser] = React.useState({
    email: '',
    name: ''
  })

  const router = useRouter()

  useEffect(() => {
    const listUsers = JSON.parse(localStorage.getItem('usersList') || '{}')
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')

    if (!token || !listUsers) {
      router.push('/login')
    } else {
      const getUser = listUsers.find((user: User) => user.email === email)
      setUser(getUser)
    }
  }, [router])

  const keysToRemove = ['email', 'token']

  const handleLogout = (): void => {
    keysToRemove.forEach((k) => localStorage.removeItem(k))
    router.push('/login')
  }

  return (
    <>
      <S.Container>
        <S.ContainerItens>
          <S.H1>Seja Bem Vindo ao Grupo GCB!</S.H1>
          <S.P>
            <span>Name: </span>
            {user.name}
          </S.P>
          <S.P>
            <span>Email: </span>
            {user.email}
          </S.P>
          <Button type="submit" handleLogout={handleLogout}>
            Logout
          </Button>
        </S.ContainerItens>
      </S.Container>
    </>
  )
}
