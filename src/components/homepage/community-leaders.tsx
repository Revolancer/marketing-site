import { P } from '@/components/text/text';
import { ColumnLayout, FullWidth } from '../layout/columns';
import { Div } from '../layout/div';
import { Flex } from '../layout/flex';
import Image from 'next/image';
import { H3, H4 } from '@/components/text/headings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const CommunityLeaders = () => {
  return (
    <ColumnLayout>
      <FullWidth css={{ marginBlock: '$14' }}>
        <H3 css={{ textAlign: 'center', marginBlockEnd: '$5' }}>
          Community leaders love it.
        </H3>
        <Flex
          css={{
            flexDirection: 'column',
            paddingBlock: '16px',
            '@md': { flexDirection: 'row', alignItems: 'center' },
          }}
          gap="12"
        >
          <Div css={{ display: 'none', '@md': { display: 'block' } }}>
            <Div
              css={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                width: '400px',
                height: '480px',
              }}
            >
              <Image
                src="/homepage/AlexFasulo.png"
                fill
                sizes="400px"
                alt="Alex Fasulo"
              />
            </Div>
          </Div>
          <Flex column gap={4}>
            <H3>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </H3>
            <P>Alex Fasulo on Revolancer:</P>
            <H4>
              “The most important part of closing a freelancing transaction is
              allowing clients to see your portfolio work quickly and cleanly!”
            </H4>
            <P>
              Alex Fasulo (840k+ followers on social media) is a freelance
              writer and content strategist who gained attention for earning
              over a million dollars on the freelance platform Fiverr. She
              specialises in content creation, including blog posts, articles,
              and social media content.
            </P>
            <P>
              Fasulo&rsquo;s success is a testament to the power of freelancing
              and the potential for talented individuals to build successful
              careers in the gig economy.
            </P>
            <Flex gap={8} css={{ alignItems: 'center' }}>
              <Div css={{ '@md': { display: 'none' } }}>
                <Div
                  css={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                  }}
                >
                  <Image
                    src="/homepage/AlexFasulo.png"
                    fill
                    sizes="80px"
                    alt="Alex Fasulo"
                    style={{ objectFit: 'cover' }}
                  />
                </Div>
              </Div>
              <Flex column css={{ '@md': { flexDirection: 'row' } }}>
                <P css={{ fontStyle: 'italic', color: '$neutral700' }}>
                  Alex Fasulo,
                </P>
                <P css={{ fontStyle: 'italic', color: '$neutral700' }}>
                  <Link
                    href="https://www.instagram.com/p/Ce31vw0DW2z/"
                    style={{ color: 'inherit' }}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    The freelancing fairy 🧚‍♀️
                  </Link>
                </P>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </FullWidth>
    </ColumnLayout>
  );
};
