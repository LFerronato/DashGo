import Document, { Html, Head, Main, NextScript } from 'next/document'
import Fonts from '@/components/Fonts'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <Fonts />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
