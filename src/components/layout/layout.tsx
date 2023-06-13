import { Header } from "./header";
import { Footer } from "../foot/footer";
import { styled } from "@/stitches.config";
import Head from "next/head";

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
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
