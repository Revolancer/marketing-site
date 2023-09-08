import { Title } from '@/components/head/title';
import { Join } from '@/components/homepage/join';
import { SeenIn } from '@/components/homepage/seenin';
import { Flex, Div, ColumnLayout, FullWidth } from '@revolancer/ui/layout';
import { PrimaryLayout } from '@/components/layout/layout';
import { PageHeader } from '@/components/layout/page-header';
import { H3, H4, H5, P } from '@revolancer/ui/text';
import { RoundedSquareImage } from '@revolancer/ui/user';
import Image from 'next/image';
import { UnstyledLink } from '@revolancer/ui/buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import { revolancerSchema } from '@/components/schema';

export default function About() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              ...(revolancerSchema as Object),
            }),
          }}
        />
      </Head>
      <PrimaryLayout>
        <Title>About Us</Title>
        <PageHeader title="We believe that traditional employment is broken." />
        <ColumnLayout css={{ fontSize: '$body1', lineHeight: '$body1' }}>
          <FullWidth>
            <Flex
              css={{
                flexDirection: 'column',
                paddingBlock: '64px',
                gap: '64px',
                '@md': { flexDirection: 'row', alignItems: 'center' },
              }}
            >
              <Flex column gap={8}>
                <H3>We want to help you achieve career freedom.</H3>
                <P>
                  At Revolancer we believe that traditional employment is broken
                  and that working for yourself is the future.
                </P>
                <P>
                  Revolancer is a skill swapping platform for self-employed
                  people to grow their small businesses without spending money.
                  Earn credits by completing projects, and spend credits on
                  services you need. Get the tools for your business: logos,
                  financial advice, branding, marketing and more, to help you
                  succeed in your individual career path.
                </P>
                <P>
                  By bringing together freelancers we support each other&rsquo;s
                  growth, ensure fairness for freelancers, and takeaway the
                  budget. 🚀
                </P>
              </Flex>

              <Image
                src="/about/MissionImage.png"
                width={512}
                height={300}
                alt="Exchange Services, Build Portfolio, Find Work"
                style={{
                  flexShrink: 0,
                  objectFit: 'scale-down',
                }}
              />
            </Flex>
          </FullWidth>
        </ColumnLayout>
        <Div
          css={{
            backgroundColor: '$neutral100',
          }}
        >
          <ColumnLayout
            css={{
              fontSize: '$body1',
              lineHeight: '$body1',
            }}
          >
            <FullWidth>
              <Flex
                css={{
                  flexDirection: 'column',
                  paddingBlock: '64px',
                  gap: '64px',
                  '@md': { flexDirection: 'row-reverse', alignItems: 'center' },
                }}
              >
                <Flex column gap={8}>
                  <H3>We know the independent work journey.</H3>
                  <P>
                    Revolancer&rsquo;s story starts with our founder Karl, who
                    started freelancing at just 13 years old and sold his first
                    business, a freelancing platform, at the age of 15.
                  </P>
                  <P>
                    Being a part of the freelance industry for over 10 years led
                    Karl to a rather sad conclusion: its current form is
                    rubbish, and freelancers way too often go undervalued. This
                    thought made him want to rewrite the rules. And so, here we
                    stand here today 🫡.
                  </P>
                  <P>
                    With an insider&rsquo;s knowledge, our team aims to
                    revolutionise this industry for the next generations, giving
                    freelancing a new, better meaning.
                  </P>
                </Flex>

                <Image
                  src="/about/StoryImage.png"
                  width={512}
                  height={300}
                  alt="The Revolancer Founders"
                  style={{
                    flexShrink: 0,
                    objectFit: 'scale-down',
                  }}
                />
              </Flex>
            </FullWidth>
          </ColumnLayout>
        </Div>
        <ColumnLayout css={{ fontSize: '$body1', lineHeight: '$body1' }}>
          <FullWidth>
            <Flex
              css={{
                flexDirection: 'column',
                paddingBlock: '64px',
                gap: '64px',
                '@md': { flexDirection: 'row', alignItems: 'center' },
              }}
            >
              <Flex column gap={8}>
                <H3>Backed by like-mined investors and users globally.</H3>
                <P>
                  Revolancer is an award-winning platform, uniting independent
                  talents globally. Our user base spans across 100+ diverse
                  countries, a true testament to our international reach.
                </P>
                <P>
                  We are very proud to be backed by investors who believe in our
                  mission including SFC Capital. Moreover, Revolancer earned
                  recognition from none other than Steve Wozniak, Apple&rsquo;s
                  co-founder, referring to us as a &ldquo;Cool startup.&rdquo;
                  To be honest, we find that quite cool 😎.
                </P>
              </Flex>

              <Image
                src="/about/BackedImage.png"
                width={364}
                height={300}
                alt="SFC Capital"
                style={{
                  flexShrink: 0,
                  objectFit: 'scale-down',
                }}
              />
            </Flex>
          </FullWidth>
        </ColumnLayout>
        <Div
          css={{
            backgroundColor: '$neutral100',
          }}
        >
          <ColumnLayout
            css={{
              fontSize: '$body1',
              lineHeight: '$body1',
            }}
          >
            <FullWidth>
              <Flex
                column
                css={{
                  paddingBlock: '64px',
                  gap: '64px',
                  alignItems: 'center',
                }}
              >
                <H3>Founding Team</H3>
                <Flex
                  css={{
                    flexDirection: 'column',
                    gap: '48px',
                    '@md': { flexDirection: 'row', alignItems: 'center' },
                  }}
                >
                  <Flex column css={{ alignItems: 'center', width: '240px' }}>
                    <Div css={{ boxShadow: '$1', borderRadius: '$2' }}>
                      <RoundedSquareImage
                        size="xl"
                        url="/about/team/karl.png"
                        alt="Karl Swanepoel"
                      />
                    </Div>
                    <H4>Karl Swanepoel</H4>
                    <H5>Founder & CEO</H5>
                    <P>(he/him)</P>
                    <UnstyledLink
                      href="https://www.linkedin.com/in/karlswa/"
                      target="_blank"
                      aria-label="LinkedIn"
                      css={{ color: '$navy500', fontSize: '$h4m' }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </UnstyledLink>
                  </Flex>
                  <Flex column css={{ alignItems: 'center', width: '240px' }}>
                    <Div css={{ boxShadow: '$1', borderRadius: '$2' }}>
                      <RoundedSquareImage
                        size="xl"
                        url="/about/team/skye.png"
                        alt="Skye Brady"
                      />
                    </Div>
                    <H4>Skye Brady</H4>
                    <H5>Co-Founder & CTO</H5>
                    <P>(they/them)</P>
                    <UnstyledLink
                      href="https://www.linkedin.com/in/skyebrady/"
                      target="_blank"
                      aria-label="LinkedIn"
                      css={{ color: '$navy500', fontSize: '$h4m' }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </UnstyledLink>
                  </Flex>
                  <Flex column css={{ alignItems: 'center', width: '240px' }}>
                    <Div css={{ boxShadow: '$1', borderRadius: '$2' }}>
                      <RoundedSquareImage
                        size="xl"
                        url="/about/team/ewa.png"
                        alt="Ewa Gorka"
                      />
                    </Div>
                    <H4>Ewa Gorka</H4>
                    <H5>Co-Founder & CPO</H5>
                    <P>(she/her)</P>
                    <UnstyledLink
                      href="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/"
                      target="_blank"
                      aria-label="LinkedIn"
                      css={{ color: '$navy500', fontSize: '$h4m' }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </UnstyledLink>
                  </Flex>
                </Flex>
              </Flex>
            </FullWidth>
          </ColumnLayout>
        </Div>
        <SeenIn white />
        <Join />
      </PrimaryLayout>
    </>
  );
}
