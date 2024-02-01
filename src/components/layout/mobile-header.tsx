import { styled } from '@revolancer/ui';
import { Logo } from './logo';
import { ColumnLayout, FullWidth, Flex } from '@revolancer/ui/layout';
import { Button, UnstyledLink } from '@revolancer/ui/buttons';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faCircleInfo,
  faHouse,
  faQuestion,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Div } from '@revolancer/ui/layout';
import { P } from '@revolancer/ui/text';

const HeaderDiv = styled('header', {
  backgroundColor: '$navy900',
  paddingBlock: '$5',
  '@md': {
    display: 'none',
  },
});

export const MobileHeader = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const toggleHeader = useCallback(() => {
    setHeaderOpen(!headerOpen);
  }, [headerOpen, setHeaderOpen]);
  return (
    <HeaderDiv
      css={
        headerOpen
          ? {
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '$modal',
              width: '100%',
            }
          : {
              position: 'sticky',
              top: '0',
              left: '0',
              width: '100%',
              zIndex: '$1',
            }
      }
    >
      <ColumnLayout>
        <FullWidth>
          <Flex
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '$white',
            }}
          >
            <UnstyledLink href="/">
              <Logo expanded />
            </UnstyledLink>
            <UnstyledLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleHeader();
              }}
              css={{ width: '$5' }}
            >
              <FontAwesomeIcon
                icon={headerOpen ? faAngleDoubleUp : faAngleDoubleDown}
              />
            </UnstyledLink>
          </Flex>
        </FullWidth>
      </ColumnLayout>
      <Div
        css={
          headerOpen
            ? {
                maxHeight: '100dvh',
                height: '100dvh',
                transition: 'max-height 0.3s ease-in-out',
              }
            : {
                maxHeight: '0',
                height: '100dvh',
                transition: 'max-height 0.3s ease-in-out',
              }
        }
      >
        {headerOpen && (
          <ColumnLayout
            css={{
              height: '90%',
              color: '$white',
              fontSize: '$body1',
              lineHeight: '$body1',
            }}
          >
            <FullWidth
              css={{
                height: '100%',
              }}
            >
              <Flex
                column
                css={{
                  justifyContent: 'space-between',
                  height: '90%',
                  marginBlock: '$14',
                }}
              >
                <Flex column gap={4}>
                  <Button href="https://revolancer.com/magazine">
                    Magazine
                  </Button>
                </Flex>
              </Flex>
            </FullWidth>
          </ColumnLayout>
        )}
      </Div>
    </HeaderDiv>
  );
};
