import * as S from './styles'

export interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit'
  handleLogout?: () => void
}

export function Button(props: ButtonProps) {
  return (
    <S.Button type={props.type} onClick={props.handleLogout}>
      {props.children}
    </S.Button>
  )
}
