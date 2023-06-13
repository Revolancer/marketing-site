import { Join } from "@/components/homepage/join";
import { ColumnLayout, FullWidth } from "@/components/layout/columns";
import { Flex } from "@/components/layout/flex";
import { PrimaryLayout } from "@/components/layout/layout";
import { PageHeader } from "@/components/layout/page-header";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <PrimaryLayout>
      <PageHeader title="Privacy Policy" />
      <ColumnLayout>
        <FullWidth>
          <Flex column css={{ marginBlock: "$16" }}>
            <p>
              <strong>PRIVACY POLICY</strong>
            </p>
            <p>
              Version number: 1.0.0
              <br />
              Effective date: 03/07/2021
            </p>
            <p>
              <strong>1. Who are we?</strong>
              <br />
              1.1. We are Revolancer Ltd. For privacy queries, you can contact
              us at support@revolancer.com. Other contact details are on our
              website.
            </p>
            <p>
              <strong>2. What&rsquo;s the point of this policy?</strong>us
              <br />
              2.1. It tells you what to expect when we collect personal
              information from users of our website/app. We are the “controller”
              of this information. Please only use our service if you are
              completely happy with this policy.
            </p>
            <p>
              2.2. Generally, the policy covers only information provided to us.
              If you give personal information to other people, such as payment
              providers or other websites, please check their privacy policies.
            </p>
            <p>
              <strong>3. Might the policy change?</strong>
              <br />
              3.1. Yes. We will take reasonable steps to give you notice of the
              new version.
            </p>
            <p>
              <strong>4. What do we collect? </strong>
              <br />
              4.1. Information which you upload to our service or otherwise give
              us such as:
              <br />
              * your name and contact details;
              <br />
              * other information you provide on registration or otherwise such
              as profile photo, business name and optional profile information
              such as descriptions, skills, certifications, languages etc ;
              <br />
              * account information such as your username and password;
              <br />
              * details about your transactions on our service;
              <br />
              * information that you include in your profile, listings, posts,
              reviews or that you otherwise provide for display on our service
              or include in messages sent via our service and/or in
              communications with us including surveys and feedback; and
              <br />* contact or other information which you give or allow us to
              use for newsletters or other marketing.
            </p>
            <p>
              4.2. Automated information about your use of our service such as:
              the internet protocol (IP) address used to connect your device to
              the internet, connection information such as browser type and
              version, information about your device including device-type and
              device identifier, operating system and platform, mobile network
              data, a unique reference number linked to the data you enter on
              our system, login details, the site from which you arrived at our
              service, details of your activity with date / time stamps
              including pages you visited and your searches / transactions.
            </p>
            <p>
              4.3. The following information about you may be provided to us by
              other people:
              <br />
              * Limited billing information sent to us by our payment provider
              or the relevant app store for verification purposes e.g., your
              name, email address and billing address.
              <br />* If you have an account with Gravatar, your profile image
              from that site will be embedded within your profile.
            </p>
            <p>
              <strong>
                5. What&rsquo;s our reason / legal basis for collecting the
                information?
              </strong>
              <br />
              5.1. Because it&rsquo;s necessary to take steps at your request to
              enter into a contract with you and/or to perform such a contract.
              This applies to information such as initial enquiries and to
              account, contact and transaction details as well as to as well as
              to profiles and other information which you display on, or send
              via, our service.
            </p>
            <p>
              5.2. Because it&rsquo;s in our “legitimate interests”, e.g., to
              manage and improve our service including tracking usage patterns
              and preventing or detecting fraud or abuse. This applies to
              information such as automated usage data and to surveys and
              feedback.
            </p>
            <p>
              5.3. Because you&rsquo;ve specifically agreed on our service (e.g,
              by ticking a consent box). This applies to contact or other
              information which you give or allow us to use for newsletters or
              other marketing. You can withdraw permission at any time as
              explained on our service or by emailing us at the above email
              address.
            </p>
            <p>
              <strong>6. How long do we keep personal information?</strong>
              <br />
              6.1. Until you ask us to remove it or our contract with you has
              ended. You can end the contract as explained in our terms and
              conditions.
            </p>
            <p>
              6.2. We may nonetheless hold on to some (or all) of your
              information for longer if reasonably needed for legal, regulatory
              or tax reasons, deal with disputes, prevent fraud or abuse and/or
              enforce our terms and conditions (typically up to six years).
            </p>
            <p>
              6.3. We will keep your information which we use only for
              newsletters or other marketing until you tell us to stop sending
              you such messages.
            </p>
            <p>
              6.4. We will generally keep automated browsing information for up
              to 26 months.
            </p>
            <p>
              <strong>
                7. To whom do we send or make available your personal
                information?{" "}
              </strong>
              <br />
              7.1. To other people who supply us with a service, e.g., hosts,
              payment providers, and businesses which help us send
              communications or monitor our service and which provide us with
              e-commerce, online advertising, analytics and other services.
            </p>
            <p>
              7.2. To the other party with whom you entered a freelance contact
              if needed to fulfil your order or deal with any post-sale
              communications.
            </p>
            <p>
              7.3. To other Internet users if you:
              <br />
              * include your real name in your username;
              <br />
              * display your personal information in a profile, post, comment,
              review or other public action on our service; or
              <br />* include your personal information in messages to other
              users.
            </p>
            <p>
              7.4. To regulators, the police and other law enforcement or
              official authorities to help deal with fraud and abuse and/or
              comply with legal requirements and/or to protect us or others.
            </p>
            <p>
              7.5. To insurers and professional advisers in connection with our
              insurance cover or to deal with legal claims.
            </p>
            <p>
              7.6. To potential buyers so far as reasonably necessary, in the
              case of an actual or proposed (including negotiations for a) sale
              or merger or business combination involving all or the relevant
              part of our business.
            </p>
            <p>
              <strong>8. Do we send your information outside the UK?</strong>
              <br />
              8.1. Your personal information which we collect is stored within
              the UK and is not transferred to any other countries except as
              follows.
            </p>
            <p>
              8.2. Your personal information (e.g., name, contact details, IP
              address, browsing information) may be transferred outside the UK
              (generally to the US) by some of the companies who provide us with
              analytics, advertising, app admin, email, and other services. If
              so, we will ensure that there is a legal basis to do so, for
              example under contracts with standard contractual clauses
              sanctioned by the Information Commissioner that are designed to
              provide adequate safeguards for your personal information.
            </p>
            <p>
              <strong>9. What rights do you have? </strong>
              <br />
              9.1. If the legal requirements are met: To ask us for access to
              your personal information, to rectify it if there are mistakes, to
              delete it or restrict its use in certain circumstances or to “data
              portability” or to withdraw any consent you&rsquo;ve given (e.g.
              marketing).
            </p>
            <p>
              9.2. You may also have the right to object to use of your personal
              information in certain circumstances.
            </p>
            <p>
              9.3. If you have a complaint about how we are dealing with your
              personal information, please contact us via the email address
              above. If you are not happy with our response or think we are not
              handling your personal information in accordance with the law, you
              have the right to complain to the Information Commissioner&rsquo;s
              Office (ICO).
            </p>
            <p>
              9.4. For more information about your rights, visit the ICO&rsquo;s
              website:{" "}
              <Link
                href="https://www.ico.org.uk"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                www.ico.org.uk
              </Link>
              .
            </p>
          </Flex>
        </FullWidth>
      </ColumnLayout>
      <Join />
    </PrimaryLayout>
  );
}
