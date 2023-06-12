import { P } from "public/text/text";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import { Flex } from "../layout/flex";
import Image from "next/image";
import { H3 } from "public/text/headings";

export const Globe = () => {
  return (
    <Div css={{ backgroundColor: "$neutral100" }}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: "$12" }}>
          <Flex
            css={{
              flexDirection: "column",
              paddingBlock: "16px",
              "@md": { flexDirection: "row", alignItems: "center" },
            }}
          >
            <Flex column gap={4}>
              <H3>No need to wait until you find your perfect match</H3>
              <P>
                Unlike traditional barter trading, Revolancer enables you to
                earn credits by exchanging your work instead of searching for
                someone who wants to exchange services with you.
              </P>
              <P>
                These credits can later be used to outsource work from anyone on
                the platform, providing you with greater flexibility and access
                to a wider range of services.
              </P>
            </Flex>
            <Image
              src="/homepage/GlobeNetwork.png"
              width={454}
              height={452}
              alt=""
              style={{
                flexShrink: 0,
                objectFit: "scale-down",
              }}
            />
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
