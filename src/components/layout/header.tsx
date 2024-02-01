import { styled } from '@revolancer/ui';
import { Logo } from './logo';
import { ColumnLayout, FullWidth, Flex } from '@revolancer/ui/layout';
import { Button, TertiaryButton, UnstyledLink } from '@revolancer/ui/buttons';

const HeaderDiv = styled('header', {
  backgroundColor: '$navy900',
  paddingBlock: '$5',
  display: 'none',
  '@md': {
    display: 'block',
  },
});

export const Header = () => {
  return (
    <HeaderDiv>
      <ColumnLayout>
        <FullWidth>
          <Flex
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '$white',
            }}
          >
            <Flex gap={8} css={{ alignItems: 'center' }}>
              <UnstyledLink href="/">
                <Logo expanded />
              </UnstyledLink>
            </Flex>
            <Flex gap={6} css={{ alignItems: 'center' }}>
              <Button href="https://revolancer.com/magazine">Magazine</Button>
            </Flex>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </HeaderDiv>
  );
};
