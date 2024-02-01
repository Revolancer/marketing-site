import { styled } from '@revolancer/ui';
import { ColumnLayout, FullWidth, Div, Flex } from '@revolancer/ui/layout';
import { Logo } from '../layout/logo';
import { Button, UnstyledLink } from '@revolancer/ui/buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { P } from '@revolancer/ui/text';

const FootColumns = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',

  '@md': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
});

export const FooterElement = styled('footer', {
  color: '$white',
  backgroundColor: '$navy900',
  paddingBlock: '$16',
});

export const Footer = () => {
  return (
    <FooterElement>
      <ColumnLayout>
        <FullWidth>
          <FootColumns>
            <Flex column gap={4}>
              <Div>
                <Logo expanded />
              </Div>
              <Flex>
                <UnstyledLink
                  href="https://twitter.com/revolancercom"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </UnstyledLink>
                <UnstyledLink
                  href="https://www.linkedin.com/company/revolancer/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </UnstyledLink>
                <UnstyledLink
                  href="https://www.instagram.com/revolancer/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </UnstyledLink>
                <UnstyledLink
                  href="https://facebook.com/revolancercom"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </UnstyledLink>
                <UnstyledLink
                  href="https://www.tiktok.com/@revolancer"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </UnstyledLink>
              </Flex>
              <P>&copy;2024 REVOLANCER LTD</P>
            </Flex>
            <Flex column gap={2}>
              <UnstyledLink href="/terms">Terms &amp; Conditions</UnstyledLink>
            </Flex>
            <Flex column gap={2}>
              <UnstyledLink href="/privacy">Privacy Policy</UnstyledLink>
            </Flex>
            <Flex column gap={2}>
              <UnstyledLink href="/cookies">Cookie Policy</UnstyledLink>
            </Flex>
            <Flex column gap={2}>
              <UnstyledLink href="/impressum">Impressum</UnstyledLink>
            </Flex>
          </FootColumns>
        </FullWidth>
      </ColumnLayout>
    </FooterElement>
  );
};
