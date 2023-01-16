const colors = {
  primaryColor: '#423B32',
  secondColor: '#FFFFFF;', // Opacity 56%
  label: '#8B6B4A',
  button: '#F5CA9C'
}

const fonts = {
  weight: {
    normal: 400,
    bold: 500,
    semiBold: 600
  },
  primary: "'Poppins', sans-serif"
}

const theme = {
  fonts,
  background:
    'linear-gradient(90deg, rgb(255, 203, 120)60%, rgb(249, 168, 38)60%)',
  ...colors
}

export default theme
