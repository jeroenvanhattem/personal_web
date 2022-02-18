import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/yantramanav/300.css"
import "@fontsource/yantramanav/400.css"
import "@fontsource/yantramanav/500.css"
import "@fontsource/yantramanav/700.css"
import theme from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
