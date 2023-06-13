import { Header } from "./header";
import { Footer } from "../foot/footer";
import { styled } from "@/stitches.config";

const Container = styled("div", {
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
});

export const PrimaryLayout = ({ children }: { children?: any }) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
