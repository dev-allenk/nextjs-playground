import { AppProps } from 'next/app'
import GlobalStyle from 'src/styles/GlobalStyle'
import Header from '../src/components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
