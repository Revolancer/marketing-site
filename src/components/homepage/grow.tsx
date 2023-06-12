import { P } from "public/text/text";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import { Flex } from "../layout/flex";
import Image from "next/image";
import { H3 } from "public/text/headings";

export const Grow = () => {
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
            <Image
              src="/homepage/DeliveredProject.png"
              width={500}
              height={379}
              alt=""
              style={{
                flexShrink: 0,
                objectFit: "scale-down",
              }}
            />
            <Flex column gap={4}>
              <H3>Grow your business, with no budget</H3>
              <P>
                Get access to a range of services like branding, website design,
                and financial management, without the need for any upfront
                costs.
              </P>
              <P>
                Benefit from professional help without any financial burden,
                allowing you to focus on growing your business.
              </P>
            </Flex>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
