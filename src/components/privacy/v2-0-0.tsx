import { Flex } from '../layout/flex';
import { Link } from '@revolancer/ui/buttons';

export const Privacyv2_0_0 = () => {
  return (
    <Flex
      column
      css={{
        marginBlock: '$16',
        '& ol': { counterReset: 'item', listStyle: 'none' },
        '& ol>li:before': {
          content: 'counters(item, ".") ". "',
          fontWeight: '$bold',
          counterIncrement: 'item',
        },
      }}
    >
      <u>
        <strong>PRIVACY POLICY</strong>
      </u>
      <strong>Version number: 2.0.0</strong>
      <strong>Effective date: 2023-08-01</strong>

      <ol>
        <li>
          <strong>Who are we?</strong>

          <ol>
            <li>
              We are Revolancer Ltd. For privacy queries, you can contact us at
              support@revolancer.com. Other contact details are on our website.
            </li>
          </ol>
        </li>
        <li>
          <strong>What&rsquo;s the point of this policy?</strong>

          <ol>
            <li>
              It tells you what to expect when we collect personal information
              from<strong> </strong>users of our website/app. We are the
              “controller” of this information. Please only use our service if
              you are completely happy with this policy.
            </li>
            <li>
              Generally, the policy covers only information provided to us. If
              you give personal information to other people, such as payment
              providers or other websites, please check their privacy policies.
            </li>
          </ol>
        </li>
        <li>
          <strong>Might the policy change?</strong>

          <ol>
            <li>
              Yes. We will take reasonable steps to give you notice of the new
              version by posting it on our service and communicating it
              otherwise if appropriate.
            </li>
          </ol>
        </li>
        <li>
          <strong>What do we collect? </strong>

          <ol>
            <li>
              Information which you upload to our service or otherwise give us
              such as:
              <ul>
                <li>your name and contact details;</li>
                <li>
                  other information you provide on registration or otherwise
                  such as date of birth, approximate location, time zone,
                  profile photo, business name and optional profile information
                  such as descriptions, skills, certifications, languages etc ;
                </li>
                <li>account information such as your username and password;</li>
                <li>details about your transactions on our service;</li>
                <li>
                  information that you include in your profile, listings, posts,
                  reviews or that you otherwise provide for display on our
                  service or include in messages sent via our service and/or in
                  communications with us including surveys and feedback; and
                </li>
                <li>
                  contact or other information which you give or allow us to use
                  for newsletters or other marketing.
                </li>
              </ul>
            </li>
            <li>
              Automated information about your use of our service such as: the
              internet protocol (IP) address used to connect your device to the
              internet, connection information such as browser type and version,
              information about your device including device-type and device
              identifier, operating system and platform, mobile network data, a
              unique reference number linked to the data you enter on our
              system, login details, the site from which you arrived at our
              service, details of your activity with date / time stamps
              including pages you visited and your searches / transactions.
            </li>
            <li>
              The following information about you may be provided to us by other
              people:
              <ul>
                <li>
                  Limited billing information sent to us by our payment provider
                  or the relevant app store for verification purposes e.g., your
                  name, email address and billing address.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <strong>
            What&rsquo;s our reason / legal basis for collecting the
            information?
          </strong>

          <ol>
            <li>
              Because it&rsquo;s necessary to take steps at your request to
              enter into a contract with you and/or to perform such a contract.
              This applies to information such as initial enquiries and to
              account, contact and transaction details as well as to as well as
              to profiles and other information which you display on, or send
              via, our service.
            </li>
            <li>
              Because it&rsquo;s in our “legitimate interests”, e.g., to send
              you marketing communications about our similar products/services,
              to manage and improve our service including tracking usage
              patterns and preventing or detecting fraud or abuse. This applies
              to information such as contact details and automated usage data
              and to surveys and feedback.
            </li>
            <li>
              Because you&rsquo;ve specifically agreed on our service (e.g, by
              ticking a consent box). This may apply to contact or other
              information which you give or allow us to use for certain kinds of
              marketing. You can withdraw permission at any time as explained on
              our service or by emailing us at the above email address.
            </li>
            <li>
              Because it&rsquo;s necessary to comply with legal or regulatory
              obligations.
            </li>
          </ol>
        </li>
        <li>
          <strong>How long do we keep personal information? </strong>

          <ol>
            <li>
              We will generally hold your information for our default standard
              retention period of six years after the end of our
              contract/relationship with you, but we may delete it earlier/later
              as set out below or in our terms and conditions.
            </li>
            <li>
              We will keep your information which we use only for newsletters or
              other marketing until you tell us to stop sending you such
              messages.
            </li>
            <li>
              We will generally keep automated browsing information for up to 14
              months.
            </li>
          </ol>
        </li>
        <li>
          <strong>
            To whom do we send or make available your personal information?{' '}
          </strong>

          <ol>
            <li>
              To other people who supply us with a service, e.g.,
              <strong> </strong>hosts, payment providers, and businesses which
              help us send communications or monitor our service and which
              provide us with customer service, e-commerce, online advertising,
              analytics, app admin and other services.
            </li>
            <li>
              To the other party with whom you entered a freelance contact if
              needed to fulfil your order or deal with any post-sale
              communications.
            </li>
            <li>
              To other Internet users if you:
              <ul>
                <li>include your real name in your username;</li>
                <li>
                  display your personal information in a profile, post, comment,
                  review or other public action on our service; or
                </li>
                <li>
                  include your personal information in messages to other users.
                </li>
              </ul>
            </li>
            <li>
              To regulators, the police and other law enforcement or official
              authorities to help deal with fraud and abuse and/or comply with
              legal requirements and/or to protect us or others.
            </li>
            <li>
              To insurers and professional advisers in connection with our
              insurance cover or to deal with legal claims.
            </li>
            <li>
              To potential buyers so far as reasonably necessary, in the case of
              an actual or proposed (including negotiations for a) sale or
              merger or business combination involving all or the relevant part
              of our business.
            </li>
          </ol>
        </li>
        <li>
          <strong>Do we send your information outside the UK?</strong>

          <ol>
            <li>
              Your personal information (e.g., name, contact details, IP
              address, browsing information) is transferred to companies outside
              the UK (generally to the US) that provide us with the services
              mentioned above (see:{' '}
              <em>
                To whom do we send or make available your personal information?
              </em>
              ). If so, we will ensure that there is a legal basis to do so, for
              example under contracts with standard contractual clauses
              sanctioned by the Information Commissioner that are designed to
              provide adequate safeguards for your personal information.
            </li>
          </ol>
        </li>
        <li>
          <strong>What rights do you have? </strong>

          <ol>
            <li>
              If the legal requirements are met: To ask us for access to your
              personal information, to rectify it if there are mistakes, to
              delete it or restrict its use in certain circumstances or to “data
              portability” or to withdraw any consent you&rsquo;ve given (e.g.
              marketing).
            </li>
            <li>
              You may also have the right to object to use of your personal
              information in certain circumstances.
            </li>
            <li>
              If you have a complaint about how we are dealing with your
              personal information, please contact us via the email address
              above. If you are not happy with our response or think we are not
              handling your personal information in accordance with the law, you
              have the right to complain to the Information Commissioner&rsquo;s
              Office (ICO).
            </li>
            <li>
              For more information about your rights, visit the ICO&rsquo;s
              website: <Link href="http://www.ico.org.uk/">www.ico.org.uk</Link>
              .
            </li>
          </ol>
        </li>
      </ol>
    </Flex>
  );
};
