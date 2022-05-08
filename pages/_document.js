import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html
        lang={BLOG.lang}
        className={BLOG.appearance === 'dark' ? 'dark' : undefined}
      >
        <Head>
          {BLOG.font && BLOG.font === 'serif'
            ? (
            <>
              <link
                rel="preload"
                href="/fonts/josefin-sans-v24-latin-regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="/fonts/josefin-sans-v24-latin-italic.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="/fonts/zcool-xiaowei-v10-chinese-simplified-regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
            </>
              )
            : (
            <>
              <link
                rel="preload"
                href="/fonts/josefin-sans-v24-latin-regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="/fonts/josefin-sans-v24-latin-italic.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="/fonts/zcool-xiaowei-v10-chinese-simplified-regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
            </>
              )}

          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon.svg"></link>
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed"></link>
          {BLOG.appearance === 'auto'
            ? (
            <>
            <meta name="theme-color" content={BLOG.lightBackground} media="(prefers-color-scheme: light)"/>
            <meta name="theme-color" content={BLOG.darkBackground} media="(prefers-color-scheme: dark)"/>
            </>
              )
            : (
            <meta name="theme-color" content={BLOG.appearance === 'dark' ? BLOG.darkBackground : BLOG.lightBackground} />
              )
          }
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
