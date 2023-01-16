import { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Project Login GCB</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="App Name" />
        <link rel="icon" href="./assets/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
