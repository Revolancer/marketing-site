import { Title } from '@/components/head/title';
import { Join } from '@/components/homepage/join';
import { ColumnLayout, FullWidth } from '@/components/layout/columns';
import { Flex } from '@/components/layout/flex';
import { PrimaryLayout } from '@/components/layout/layout';
import { PageHeader } from '@/components/layout/page-header';
import { Privacyv1_0_0 } from '@/components/privacy/v1-0-0';
import { Privacyv2_0_0 } from '@/components/privacy/v2-0-0';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <PrimaryLayout>
      <Title>Privacy Policy</Title>
      <PageHeader title="Privacy Policy" />
      <ColumnLayout>
        <FullWidth>
          <Privacyv2_0_0 />
          <hr />
          <Privacyv1_0_0 />
        </FullWidth>
      </ColumnLayout>
      <Join />
    </PrimaryLayout>
  );
}
