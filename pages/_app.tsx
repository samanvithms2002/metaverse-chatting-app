import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MoralisProvider initializeOnMount appId={process.env.NEXT_PUBLIC_APP_ID!} serverUrl={process.env.NEXT_PUBLIC_SERVERURL!}>
    <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp
