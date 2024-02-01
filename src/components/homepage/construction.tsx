import { Link } from '@revolancer/ui/buttons';
import { ColumnLayout, Flex, FullWidth } from '@revolancer/ui/layout';
import { H3, P } from '@revolancer/ui/text';
import Image from 'next/image';

export const Construction = () => {
  return (
    <ColumnLayout>
      <FullWidth css={{ marginBlock: '$12', marginInline: 'auto' }}>
        <Flex
          css={{
            flexDirection: 'column',
            paddingBlock: '16px',
            '@md': { flexDirection: 'row', alignItems: 'center' },
            gap: '$8',
            alignItems: 'center',
          }}
        >
          <Image
            src="/revy/revy-builder.png"
            width={248}
            height={371}
            alt=""
            style={{
              flexShrink: 0,
              objectFit: 'scale-down',
            }}
          />
          <Flex column gap={4} css={{ maxWidth: 600 }}>
            <H3>Big changes are coming...</H3>
            <P>
              Apologies for the disruption. We&rsquo;re working on something
              exciting at the moment. In the meantime you can visit our{' '}
              <Link href="https://revolancer.com/magazine/">magazine</Link> for
              top-quality freelance content.
            </P>
            <P>
              If you&rsquo;d like you can contact us at support@revolancer.com
            </P>
            <P>Stay tuned! 🙌</P>
          </Flex>
        </Flex>
      </FullWidth>
    </ColumnLayout>
  );
};
