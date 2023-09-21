import { ColumnLayout, FullWidth, Div, Flex } from '@revolancer/ui/layout';
import { H2, H4 } from '@revolancer/ui/text';
import { Button } from '@revolancer/ui/buttons';

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
