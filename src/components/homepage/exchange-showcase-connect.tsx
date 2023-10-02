import { styled } from '@revolancer/ui';
import { ColumnLayout, FullWidth, Div, Flex } from '@revolancer/ui/layout';
import { H5, P } from '@revolancer/ui/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeFork,
  faImages,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Columns = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginBlock: '64px',
  gap: '24px',

  '@md': {
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBlock: '120px',
  },
});

const StyledIcon = styled(FontAwesomeIcon, {
  backgroundColor: '$neutral100',
  color: '$navy900',
  display: 'inline-block',
  width: '18px',
  height: '18px',
  padding: '15px',
  borderRadius: '100%',
});

export const ExchangeShowcaseConnect = () => {
  return (
    <ColumnLayout>
      <FullWidth>
        <Columns>
          <Div>
            <Flex css={{ alignItems: 'center' }}>
              <StyledIcon icon={faUsers} />
              <H5>Exchange your services</H5>
            </Flex>
            <P>
              Offer your services and earn credits, then spend them on services
              you need to scale your business.
            </P>
          </Div>
          <Div>
            <Flex css={{ alignItems: 'center' }}>
              <StyledIcon icon={faImages} />
              <H5>Showcase Your Portfolio</H5>
            </Flex>
            <P>
              Create a portfolio to showcase your work to other professionals in
              need of your services.
            </P>
          </Div>
          <Div>
            <Flex css={{ alignItems: 'center' }}>
              <StyledIcon icon={faCodeFork} />
              <H5>Connect With Your Community</H5>
            </Flex>
            <P>
              Connect with more than 100,000 like-minded independents from all
              around the world.
            </P>
          </Div>
        </Columns>
      </FullWidth>
    </ColumnLayout>
  );
};
