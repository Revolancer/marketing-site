import { Title } from '@/components/head/title';
import { Join } from '@/components/homepage/join';
import { ColumnLayout, FullWidth } from '@/components/layout/columns';
import { PrimaryLayout } from '@/components/layout/layout';
import { PageHeader } from '@/components/layout/page-header';
import { Termsv2_0_0 } from '@/components/terms/v2-0-0';

export default function Terms() {
  return (
    <PrimaryLayout>
      <Title>Terms &amp; Conditions</Title>
      <PageHeader title="Terms and Conditions" />
      <ColumnLayout>
        <FullWidth>
          <Termsv2_0_0 />
        </FullWidth>
      </ColumnLayout>
      <Join />
    </PrimaryLayout>
  );
}
