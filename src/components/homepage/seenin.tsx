import { P } from '@revolancer/ui/text';
import { ColumnLayout, FullWidth, Div, Flex } from '@revolancer/ui/layout';
import Image from 'next/image';

export const SeenIn = ({ white = false }: { white?: boolean }) => {
  return (
    <Div css={!white ? { backgroundColor: '$neutral100' } : {}}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: '$12' }}>
          <P css={{ textAlign: 'center', marginBlockEnd: '$6' }}>
            Revolancer featured in:
          </P>
          <Flex gap={10} wrap css={{ justifyContent: 'center' }}>
            <Image
              height={40}
              width={129}
              alt="Business Insider"
              src="/homepage/publications/businsider.png"
            />
            <Image
              height={40}
              width={246}
              alt="The Telegraph"
              src="/homepage/publications/telegraph.png"
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
