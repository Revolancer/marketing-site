import { styled } from "@/stitches.config";
import { Flex } from "./flex";
import { Logo } from "./logo";
import { Button, TertiaryButton } from "../navigation/button";
import { Header } from "./header";
import { Footer } from "../foot/footer";

export const PrimaryLayout = ({ children }: { children?: any }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
