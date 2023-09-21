import { Title } from '@/components/head/title';
import { Join } from '@/components/homepage/join';
import { ColumnLayout, FullWidth } from '@revolancer/ui/layout';
import { PrimaryLayout } from '@/components/layout/layout';
import { PageHeader } from '@/components/layout/page-header';
import { Privacyv2_0_0 } from '@/components/privacy/v2-0-0';

export default function Privacy() {
  return (
    <PrimaryLayout>
      <Title>Privacy Policy</Title>
      <PageHeader title="Privacy Policy" />
      <ColumnLayout>
        <FullWidth>
          <Privacyv2_0_0 />
        </FullWidth>
      </ColumnLayout>
      <Join />
    </PrimaryLayout>
  );
}
