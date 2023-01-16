import * as S from './styles'

export interface ForwardRefProps {
  text: string
  hyperLink: string
  link: string
  onClick?: () => void
}

export const ForwardRef = (props: ForwardRefProps) => {
  return (
    <>
      <S.ForwardRef>
        {props.text}
        <a href={props.link} onClick={props.onClick}>
          {props.hyperLink}
        </a>
      </S.ForwardRef>
    </>
  )
}
