import { Header } from "./header";
import { Footer } from "../foot/footer";
import { styled } from "@/stitches.config";
import Head from "next/head";
import Script from "next/script";

const Container = styled("div", {
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
});

export const PrimaryLayout = ({ children }: { children?: any }) => {
  return (
    <>
      <Head>
        <meta name="description">
          Revolancer is a skills exchange platform for online digital
          professionals.
        </meta>
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
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
