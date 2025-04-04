import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang="pt">
      <Head />
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 