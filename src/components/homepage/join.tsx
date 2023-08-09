import { ColumnLayout, FullWidth } from '../layout/columns';
import { Div } from '../layout/div';
import { Flex } from '../layout/flex';
import { H2, H4 } from '@/components/text/headings';
import { Buttons } from '@revolancer/ui';
const { Button } = Buttons;

export const Join = () => {
  return (
    <Div css={{ backgroundColor: '$neutral100' }}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: '$16' }}>
          <Flex
            column
            gap={6}
            css={{ textAlign: 'center', alignItems: 'center' }}
          >
            <H2
              css={{
                lineHeight: '$h1m',
                fontSize: '$h1m',
                '@md': { lineHeight: '$h1', fontSize: '$h1' },
              }}
            >
              Join Our Community
            </H2>
            <H4>Become a member today!</H4>
            <Button href="https://app.revolancer.com/register">Join Now</Button>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
