import Head from 'next/head';
import { Viewport } from 'next';
import OneTrustScripts from '@components/third-party/OneTrustScripts';
import GlobalHeader from '@components/sections/GlobalHeader';
import GlobalFooter from '@components/sections/GlobalFooter';
import "@styles/globals.scss";

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <OneTrustScripts />
      </Head>
      <body>
        <GlobalHeader />
        
        {children}

        <GlobalFooter />
      </body>
    </html>
  )
}