import Image from "next/image";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";

export const Hero = () => {
  return (
    <>
      <Div
        css={{
          position: "relative",
        }}
      >
        <Div
          css={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "50vw",
            height: "100%",
            backgroundColor: "$navy900",
          }}
        />
        <Div
          css={{
            position: "absolute",
            top: "0",
            left: "50vw",
            width: "50vw",
            height: "100%",
            backgroundColor: "$white",
          }}
        />
        <Div
          css={{
            maxHeight: "564px",
            maxWidth: "1440px",
            minWidth: "360px",
            minHeight: "564px",
            position: "relative",
            marginInline: "auto",
          }}
        >
          <Image
            src="/homepage/hero.png"
            alt=""
            height="564"
            width="1440"
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            quality={100}
          ></Image>
          <ColumnLayout>
            <FullWidth>Hero</FullWidth>
          </ColumnLayout>
        </Div>
      </Div>
    </>
  );
};
