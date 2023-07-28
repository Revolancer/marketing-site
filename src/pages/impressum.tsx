import { Title } from '@/components/head/title';
import { Join } from '@/components/homepage/join';
import { ColumnLayout, FullWidth } from '@/components/layout/columns';
import { Flex } from '@/components/layout/flex';
import { PrimaryLayout } from '@/components/layout/layout';
import { PageHeader } from '@/components/layout/page-header';
import Link from 'next/link';
import { H5 } from 'public/text/headings';
import { P } from 'public/text/text';

export default function FourOhFour() {
  return (
    <PrimaryLayout>
      <Title>Impressum</Title>
      <PageHeader title="Impressum" />
      <ColumnLayout>
        <FullWidth>
          <Flex column css={{ marginBlock: '$16' }}>
            <H5>Company Details</H5>
            <P>REVOLANCER LTD</P>
            <P> Company number: 13149073</P>
            <P>Registered in England and Wales.</P>
            <P>VAT number: 416020154</P>
            <H5>Registered Office Address</H5>
            <P>
              REVOLANCER LTD
              <br />
              Britannia House
              <br />
              Caerphilly Business Park
              <br />
              Van Road
              <br />
              Caerphilly
              <br />
              CF83 3GG
            </P>
            <H5>Contact Email</H5>
            <Link href="mailto:support@revolancer.com">
              support@revolancer.com
            </Link>
            <H5>CEO</H5>
            <P>Karl Swanepoel</P>
            <H5>Terms and Policies</H5>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </Flex>
        </FullWidth>
      </ColumnLayout>
      <Join />
    </PrimaryLayout>
  );
}
