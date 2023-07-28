import { Header } from './header';
import { Footer } from '../foot/footer';
import { styled } from '@/stitches.config';
import Head from 'next/head';
import Script from 'next/script';

const Container = styled('div', {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
});

export const PrimaryLayout = ({ children }: { children?: any }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="
          Revolancer is the leading service exchange platform and freelance
          marketplace for skilled online professionals."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TRKYDYVYSJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TRKYDYVYSJ');
        `}
      </Script>

      <Script id="metapixel" strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '280327607210706');
        fbq('track', 'PageView');
        `}
      </Script>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
