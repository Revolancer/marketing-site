import { P } from "public/text/text";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import { Flex } from "../layout/flex";
import Image from "next/image";

export const SeenIn = () => {
  return (
    <Div css={{ backgroundColor: "$neutral100" }}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: "$12" }}>
          <P css={{ textAlign: "center", marginBlockEnd: "$6" }}>As seen in:</P>
          <Flex gap={10} wrap css={{ justifyContent: "center" }}>
            <Image
              height={40}
              width={129}
              alt="Business Insider"
              src="/homepage/publications/businsider.png"
            />
            <Image
              height={40}
              width={250}
              alt="Business Live"
              src="/homepage/publications/buslive.png"
            />
            <Image
              height={40}
              width={93}
              alt="Insider Media"
              src="/homepage/publications/insider.png"
            />
            <Image
              height={40}
              width={260}
              alt="Medium"
              src="/homepage/publications/medium.png"
            />
            <Image
              height={40}
              width={244}
              alt="Western Mail"
              src="/homepage/publications/western.png"
            />
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
