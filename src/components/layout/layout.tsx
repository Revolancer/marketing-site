import { styled } from "@/stitches.config";
import { Flex } from "./flex";
import { Logo } from "./logo";
import { Button, TertiaryButton } from "../navigation/button";
import { Header } from "./header";

export const PrimaryLayout = ({ children }: { children?: any }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
