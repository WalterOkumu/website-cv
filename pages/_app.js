import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
          <>
            <Head>
              <title>Website - Cabo Verde</title>
            </Head>
            <Component {...pageProps} />
          </>
        )
}

export default MyApp
