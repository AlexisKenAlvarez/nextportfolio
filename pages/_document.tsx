import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth', margin: "0", padding: "0", overflow: "auto"}}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
