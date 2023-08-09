import { P } from '@/components/text/text';
import { ColumnLayout, FullWidth } from '../layout/columns';
import { Div } from '../layout/div';
import { Flex } from '../layout/flex';
import Image from 'next/image';
import { H3 } from '@/components/text/headings';

export const Build = () => {
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
            <Flex column gap={4}>
              <H3>Build your portfolio and showcase to others</H3>
              <P>
                If you&rsquo;re just starting out, use Revolancer to gain real
                experience and build a portfolio in exchange for the services
                you need. Then share your portfolio to gain even more work.
              </P>
            </Flex>
            <Image
              src="/homepage/portfolio-1.png"
              width={500}
              height={440}
              alt=""
              style={{
                flexShrink: 0,
                objectFit: 'scale-down',
              }}
            />
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
