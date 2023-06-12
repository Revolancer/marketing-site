import { P } from "public/text/text";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import FAQItem from "../layout/faq-item";
import { Flex } from "../layout/flex";
import { H3 } from "public/text/headings";

export const FAQs = () => {
  return (
    <Div css={{ backgroundColor: "$neutral100" }}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: "$16" }}>
          <Flex column gap={6}>
            <H3
              css={{
                textAlign: "center",
              }}
            >
              FAQs
            </H3>
            <FAQItem label="Why would freelancers want to trade instead of being paid money?">
              <P>
                Freelancers may prefer to trade services as it allows them to
                expand their network, gain exposure to new industries and build
                relationships with other professionals.
              </P>
              <P>
                Additionally, they can earn credits by providing their services,
                which can be used to outsource other work on the platform,
                ultimately leading to increased work opportunities and
                potentially more revenue in the long run.
              </P>
            </FAQItem>
            <FAQItem label="How would you value what services are worth?">
              <P>
                In a regular barter trade it might be a bit difficult to
                estimate the value of traded services, but Revolancer makes it
                easy! During onboarding we ask all independents about their
                users of experience and hourly rate. This data is then used to
                help independents price their services in credits (our algorithm
                will let you know if its likely you&rsquo;re over or
                undercharging your services).
              </P>
            </FAQItem>
            <FAQItem label="How do I know I&rsquo;ll get quality work?">
              <P>
                You can browse through a freelancer&rsquo;s portfolio, read
                reviews from previous clients, and even ask additional questions
                via the chat before choosing to work with them.
              </P>
              <P>
                This allows you to ensure that you're hiring a skilled
                professional with relevant experience who can deliver quality
                work.
              </P>
            </FAQItem>
            <FAQItem label="Is it free to join?">
              <P>Yes, Revolancer is 100% free to use.</P>
            </FAQItem>
            <FAQItem label="What are Credits?">
              <P>
                Credits are an easy way to store the value you have provided to
                other freelancers. You can exchange them to get the things your
                business needs, such as:
              </P>
              <ul>
                <li>
                  professional social media assets (e.g. profile picture
                  editing, banners, logo, tagline)
                </li>
                <li>
                  lead generation (e.g. sales consultancy, outreach messages
                  templates)
                </li>
                <li>marketing (e.g SEO, social media ads)</li>
                <li>websites (e.g website design, development)</li>
              </ul>
            </FAQItem>
            <FAQItem label="Can credits be withdrawn?">
              <P>
                No. Credits are an internal means of sourcing work - you can
                earn credits by expanding your portfolio (delivering projects),
                and then spend them on what you need (see question above) on
                Revolancer Beta. These credits cannot be withdrawn from the
                platform, however their value can be extracted by using them to
                source projects for yourself or client projects from other users
                on the platform.
              </P>
            </FAQItem>
            <FAQItem label="Do I need to swap both ways?">
              <P>
                N-O-P-E. You can focus on doing what you love and building your
                portfolio, all while earning credits for completed work. These
                credits can then be used to access a variety of services and
                grow your business without incurring significant costs.
              </P>
              <P>
                This not only helps you to gain experience and expand your
                skillset but also allows you to achieve your business goals in a
                cost-effective manner. It&rsquo;s a win-win situation for all!
              </P>
            </FAQItem>
          </Flex>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
