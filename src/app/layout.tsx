import './globals.css'
import { Inter } from 'next/font/google'
import { getCssText, globalStyles } from "stitches.config"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Revolancer',
  description: 'Revolancer is a free skill exchange platform for online professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  globalStyles();
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d253a" />
        <meta name="msapplication-TileColor" content="#0d253a" />
        <meta name="theme-color" content="#0d253a" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
