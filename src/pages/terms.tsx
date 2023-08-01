import { Title } from '@/components/head/title';
import { Join } from '@/components/homepage/join';
import { ColumnLayout, FullWidth } from '@/components/layout/columns';
import { Flex } from '@/components/layout/flex';
import { PrimaryLayout } from '@/components/layout/layout';
import { PageHeader } from '@/components/layout/page-header';
import { Termsv1_0_1 } from '@/components/terms/v1-0-1';
import { Termsv2_0_0 } from '@/components/terms/v2-0-0';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <PrimaryLayout>
      <Title>Terms &amp; Conditions</Title>
      <PageHeader title="Terms and Conditions" />
      <ColumnLayout>
        <FullWidth>
          <Termsv2_0_0 />
          <hr />
          <Termsv1_0_1 />
        </FullWidth>
      </ColumnLayout>
      <Join />
    </PrimaryLayout>
  );
}
