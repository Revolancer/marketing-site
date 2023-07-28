import { Title } from '@/components/head/title';
import { ColumnLayout, FullWidth } from '@/components/layout/columns';
import { Flex } from '@/components/layout/flex';
import { PrimaryLayout } from '@/components/layout/layout';
import { Button } from '@/components/navigation/button';
import Image from 'next/image';
import { H1, H3 } from 'public/text/headings';
import { P } from 'public/text/text';

export default function FourOhFour() {
  return (
    <PrimaryLayout>
      <ColumnLayout>
        <Title>404</Title>
        <FullWidth>
          <Flex
            column
            gap={3}
            css={{
              width: '100%',
              alignItems: 'center',
              marginBlockStart: '$12',
            }}
          >
            <Image
              src="/revy/revy-confused.png"
              alt="Revy, ready to help you get back on track"
              width={188}
              height={178}
            />
            <H1>404</H1>
            <H3>Page not found</H3>
            <P>Oops! The page you&rsquo;re looking for does not exist.</P>
            <Button href="/" replace css={{ marginBlock: '$12' }}>
              Go to homepage
            </Button>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </PrimaryLayout>
  );
}
