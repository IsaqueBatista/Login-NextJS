export const generateToken = (lengthChars: number) => {
  const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let tokenStore = ''
  for (let i = 0; i < lengthChars; i++) {
    tokenStore += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  return tokenStore
}
