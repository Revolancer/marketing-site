import { styled } from '@revolancer/ui';
import { ColumnLayout, FullWidth } from '../layout/columns';
import { Div } from '../layout/div';
import { Flex } from '../layout/flex';
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
import { P } from '@/components/text/text';

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
              <P>&copy;2023 REVOLANCER LTD</P>
            </Flex>
            <Flex column gap={2}>
              <P css={{ fontWeight: '$bold', fontSize: '$h5' }}>Company</P>
              <UnstyledLink href="/">Homepage</UnstyledLink>
              <UnstyledLink href="/#works">How it Works</UnstyledLink>
              <UnstyledLink href="/about">About Us</UnstyledLink>
            </Flex>
            <Flex column gap={2}>
              <P css={{ fontWeight: '$bold', fontSize: '$h5' }}>Resources</P>
              <UnstyledLink href="/magazine">Magazine</UnstyledLink>
              <UnstyledLink href="https://support.revolancer.com/">
                Support
              </UnstyledLink>
              <UnstyledLink
                href="https://status.revolancer.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Status
              </UnstyledLink>
            </Flex>
            <Flex column gap={2}>
              <P css={{ fontWeight: '$bold', fontSize: '$h5' }}>Legal</P>
              <UnstyledLink href="/terms">Terms &amp; Conditions</UnstyledLink>
              <UnstyledLink href="/privacy">Privacy Policy</UnstyledLink>
              <UnstyledLink href="/cookies">Cookie Policy</UnstyledLink>
              <UnstyledLink href="/impressum">Impressum</UnstyledLink>
            </Flex>
            <Flex column gap={2}>
              <P css={{ fontWeight: '$bold', fontSize: '$h5' }}>
                Join Revolancer Today
              </P>
              <Button href="https://app.revolancer.com/register">
                Join Now
              </Button>
            </Flex>
          </FootColumns>
        </FullWidth>
      </ColumnLayout>
    </FooterElement>
  );
};
