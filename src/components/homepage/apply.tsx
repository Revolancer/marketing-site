import { P, H3 } from '@revolancer/ui/text';
import { ColumnLayout, FullWidth, Div, Flex } from '@revolancer/ui/layout';
import Image from 'next/image';

export const Apply = () => {
  return (
    <Div css={{ backgroundColor: '$neutral100' }}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: '$12' }}>
          <Flex
            css={{
              flexDirection: 'column',
              paddingBlock: '16px',
              '@md': { flexDirection: 'row', alignItems: 'center' },
            }}
          >
            <Image
              src="/homepage/JobBoard.png"
              width={500}
              height={379}
              alt=""
              style={{
                flexShrink: 0,
                objectFit: 'scale-down',
              }}
            />
            <Flex column gap={4}>
              <H3>Apply for job opportunities when you&rsquo;re ready</H3>
              <P>Looking for more work? Revolancer has you covered!</P>
              <P>
                You can find many job opportunities on our jobs board. Simply
                browse through categories you&rsquo;re interested in, and apply
                to the one that fits you best!
              </P>
            </Flex>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
