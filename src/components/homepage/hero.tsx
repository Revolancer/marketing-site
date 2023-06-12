import Image from "next/image";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import { Flex } from "../layout/flex";
import { H1, H4 } from "public/text/headings";
import { P, SubtitleOne } from "public/text/text";
import { Button } from "../navigation/button";

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
            maxHeight: "1024px",
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
              height: "100%",
              width: "100%",
            }}
            quality={100}
          ></Image>
          <ColumnLayout>
            <FullWidth>
              <Flex
                css={{
                  color: "$white",
                  flexDirection: "column",
                  paddingBlock: "16px",
                  "@md": { flexDirection: "row", alignItems: "end" },
                }}
              >
                <Flex column>
                  <H1>Exchange services with other online professionals.</H1>
                  <H4>
                    Exchange services, earn credits, then spend them on what you
                    need to grow your online business.
                  </H4>
                  <Button href="https://app.revolancer.com/register">
                    Join Now
                  </Button>
                </Flex>
                <Image
                  src="/homepage/hero-image.png"
                  width={533}
                  height={400}
                  alt=""
                  style={{
                    flexShrink: 0,
                    minWidth: "400px",
                    objectFit: "scale-down",
                  }}
                />
              </Flex>
            </FullWidth>
          </ColumnLayout>
        </Div>
      </Div>
    </>
  );
};
