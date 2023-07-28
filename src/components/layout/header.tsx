import { styled } from '@/stitches.config';
import { Logo } from './logo';
import { ColumnLayout, FullWidth } from './columns';
import { Flex } from './flex';
import { Button, TertiaryButton, UnstyledLink } from '../navigation/button';

const HeaderDiv = styled('header', {
  backgroundColor: '$navy900',
  paddingBlock: '$5',
});

export const Header = () => {
  return (
    <HeaderDiv>
      <ColumnLayout>
        <FullWidth>
          <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <UnstyledLink href="/">
              <Logo expanded />
            </UnstyledLink>
            <Flex gap={6} css={{ alignItems: 'center' }}>
              <TertiaryButton
                href="https://app.revolancer.com/login"
                css={{ color: '$white' }}
              >
                Log in
              </TertiaryButton>
              <Button href="https://app.revolancer.com/register">
                Join Now
              </Button>
            </Flex>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </HeaderDiv>
  );
};
