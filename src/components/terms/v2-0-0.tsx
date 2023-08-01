import { Flex } from '../layout/flex';
import { Link } from '../navigation/button';

export const Termsv2_0_0 = () => {
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
      <p>
        <strong>TERMS AND CONDITIONS</strong>
      </p>
      <p>
        <strong>Version number: 2.0.0</strong>
      </p>
      <p>
        <strong>Effective date: 2023-08-01</strong>
      </p>
      <ol>
        <li>
          <strong>Who we are</strong>

          <ol>
            <li>
              We are Revolancer Ltd. Our company information is at the end of
              this document.
            </li>
          </ol>
        </li>
        <li>
          <strong>What this is all about</strong>

          <ol>
            <li>
              These are our terms and conditions which apply to our Service
              (explained below). We&rsquo;ve tried to make them user-friendly.
              Please read them carefully and save a copy as we don&rsquo;t file
              a copy specifically for the transaction with you. They&rsquo;re
              available in English only.
            </li>
            <li>
              If you act for a third party, you are confirming that they are
              legally bound by these terms and conditions and also that you are
              independently bound on your own behalf.
            </li>
          </ol>
        </li>
        <li>
          <strong>Some definitions</strong>

          <ol>
            <li>
              Here are some definitions which are used in this document (all
              capitalised):
              <ul>
                <li>
                  &ldquo;App&rdquo; &ndash; the Revolancer mobile application.
                </li>
                <li>
                  &ldquo;Buyer&rdquo; &ndash; a User when using our Service in
                  the capacity of a buyer of Freelance Services.
                </li>
                <li>
                  &ldquo;Consumer&rdquo; &ndash; an individual acting for
                  purposes which are wholly or mainly outside that
                  person&rsquo;s trade, business, craft or profession.
                </li>
                <li>
                  &ldquo;Content&rdquo; &ndash; all information of whatever kind
                  (including listings, profiles, posts, comments, chat, images,
                  photos, audio, video, advertisements, messages, Reviews etc.)
                  displayed on or sent through our Service.
                </li>
                <li>
                  &ldquo;Credits&rdquo; &ndash; credits that can be used to pay
                  for Freelance Services on our Service.
                </li>
                <li>
                  &ldquo;Dispute&rdquo; &ndash; a dispute raised through our
                  Service.
                </li>
                <li>
                  &ldquo;Freelance Contract&rdquo; &ndash; a contract for the
                  supply of Freelance Services.
                </li>
                <li>
                  &ldquo;Freelance Services&rdquo; &ndash; services offered by
                  Sellers to Buyers on our Service.
                </li>
                <li>&ldquo;Review&rdquo; &ndash; any review or rating.</li>
                <li>
                  &ldquo;Seller&rdquo; &ndash; a User when using our Service in
                  the capacity of a supplyier of Freelance Services.
                </li>
                <li>
                  &ldquo;Service&rdquo; &ndash; the platform service we offer by
                  means of our website/App<strong> </strong>and any related
                  software and services.
                </li>
                <li>
                  &ldquo;Store&rdquo; &ndash; the app distributor from which you
                  download the App (e.g., Apple App Store, Google Play App
                  Store).
                </li>
                <li>
                  &ldquo;Store Rules&rdquo; &ndash; any applicable rules,
                  policies or terms of the relevant Store.
                </li>
                <li>
                  &ldquo;User&rdquo; &ndash; people or organisations using our
                  Service (whether or not registered with us).
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <strong>How you enter a legal contract with us </strong>
          <ol>
            <li>
              By registering on our website, you enter a legal contract with us
              to use our platform<strong> </strong>Service (which is different
              from the Freelance Contract between Seller and Buyer &ndash; see
              below). Alternatively, if you first download our App, you enter
              into a legal contract with us at that point. Note that future
              orders from us are part of this same contract with us.
            </li>
            <li>
              For App users: These terms and conditions are an &ldquo;end user
              licence agreement&rdquo; between you and us (not the Store) in
              relation to our App (i.e., setting out how we allow you to use our
              App). You also agree to be legally bound by the Store Rules.
            </li>
            <li>
              We reserve the right in our discretion for any lawful reason to
              refuse any request to use our Service.
            </li>
            <li>
              By browsing any part of our Service that does not require
              registration, you are also bound by these terms to the extent they
              are relevant.
            </li>
          </ol>
        </li>
        <li>
          <strong>
            Consumer right to cancel this platform contract (&ldquo;cooling
            off&rdquo;)
          </strong>
          <ol>
            <li>
              If you are a Consumer, you may have the right to cancel this
              contract as further explained at the end of this document.
            </li>
          </ol>
        </li>
        <li>
          <strong>Changing these terms and conditions</strong>

          <ol>
            <li>
              We may change these terms and conditions by giving you at least 15
              days&rsquo; notice unless a more urgent change is needed to comply
              with laws or regulations or to deal with an unforeseen and
              imminent danger.<strong> </strong>We will notify you by posting
              the new version on our website and, if the changes are important,
              by email, SMS and/or in-app message.
            </li>
            <li>
              If you don&rsquo;t agree to the new terms and the changes are
              important, you can email us (to the address below) to end this
              contract on the day before the new terms take effect.
            </li>
          </ol>
        </li>
        <li>
          <strong>Your right to use our Service</strong>
          <ol>
            <li>
              We grant you a limited personal non-transferable right to use our
              Service on any applicable device owned or controlled by you (only
              Apple-branded if you download our App from Apple) subject to these
              terms and conditions and, where applicable, in accordance with the
              Store Rules.
            </li>
          </ol>
        </li>
        <li>
          <strong>Who can use our Service?</strong>
          <ol>
            <li>
              You must not use, or attempt to register on, our Service if you
              are below 13 years of age.
            </li>
          </ol>
        </li>
        <li>
          <strong>Behaviour when using our Service</strong>
          <ol>
            <li>
              You agree not to do any of the following in connection with the
              Service:
              <ul>
                <li>break the law or infringe anyone else&rsquo;s rights;</li>
                <li>
                  send, store, display or link to unlawful, infringing or
                  otherwise inappropriate Content;
                </li>
                <li>victimise or harass other people;</li>
                <li>
                  use offensive, obscene, abusive, discriminatory or other
                  inappropriate language or images;
                </li>
                <li>deceive or mislead anyone;</li>
                <li>
                  send, store, display or link to any Content that includes
                  someone else&rsquo;s personal information unless that person
                  is 18 years or over and you have obtained their written
                  consent;
                </li>
                <li>impersonate anyone;</li>
                <li>
                  use the Service with a view to competing with us or infringing
                  our rights;
                </li>
                <li>disrupt our Service, e.g., spam, viruses or phishing;</li>
                <li>
                  interfere with or damage our Service or gain unauthorised
                  access to any part of our system, data, passwords or
                  otherwise;
                </li>
                <li>intercept or modify communications;</li>
                <li>impose an unreasonable load on our Service;</li>
                <li>deliberately exploit any bugs found within the Service;</li>
                <li>
                  get around any security or other features including those
                  designed to stop copying of Content; or
                </li>
                <li>attempt, encourage or assist any of the above.</li>
              </ul>
            </li>
            <li>
              You agree to:
              <ul>
                <li>
                  comply with the guidance/ requirements on our Service and with
                  our reasonable requests; and
                </li>
                <li>
                  ensure that any contact or other information that you supply
                  to us is accurate and not misleading and you will tell us if
                  there are any important changes.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <strong>Standard of Service</strong>

          <ol>
            <li>
              Subject to the rest of these terms, we agree to provide our
              Service with reasonable skill and care.
            </li>
          </ol>
        </li>
        <li>
          <strong>
            Freelance Services (very important &ndash; we only provide a
            platform)
          </strong>
        </li>
        <ol>
          <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
            <li style={{ listStyle: 'none' }}>
              <em>General</em>
            </li>
          </ul>
          <li>
            Our Service is a neutral platform where Sellers can arrange to
            supply Freelance Services to Buyers. We do not supply those
            services. Any Freelance Contract is between the respective Seller
            and Buyer and the terms are for the parties to agree providing that
            they are consistent with this agreement. We are not a party to the
            Freelance Contract itself. You acknowledge that any legal recourse
            arising from breach of the Freelance Contract is against the other
            party to the Freelance Contract and not against us.
          </li>
          <li>
            You also separately agree with us that you will comply with each
            Freelance Contract.{' '}
          </li>
          <li>
            <strong>
              IMPORTANT: If you pass contact details to, and/or communicate
              with, another User outside our Service (including making payment):
            </strong>
            <ul>
              <li>
                <strong>you do so at your own risk;</strong>
              </li>
              <li>
                <strong>
                  you are not entitled to raise a Dispute (i.e., through our
                  Service) and the references to Dispute in these terms
                  don&rsquo;t apply; and
                </strong>
              </li>
              <li>
                <strong>
                  the provisions relating to payment of Credits by the Buyer and
                  to the Seller don&rsquo;t apply (if you make payment outside
                  the Service).
                </strong>
              </li>
            </ul>
          </li>
          <li>
            You agree that we are allowed at any time to end or suspend any
            Freelance Contract by giving notice by email, SMS and/or in-app
            message if we consider that either party has broken this platform
            contract or this platform contract ends or it is necessary to
            protect either party. If so, we retain absolute discretion as to how
            to deal with any applicable Credits.
          </li>
          <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
            <li style={{ listStyle: 'none' }}>
              <em>Your obligations to the Buyer / Seller</em>
            </li>
          </ul>
          <li>
            The Sellers agree that in connection with supply of Freelance
            Services to the Buyer:
            <ul>
              <li>
                it has and will maintain the necessary abilities (including
                licenses, permissions, qualifications, skills, training,
                expertise);
              </li>
              <li>
                it will supply the Freelance services with reasonable skill and
                care; and
              </li>
              <li>
                it will comply with all applicable laws and regulations
                (including data protection) and will not infringe any third
                party rights.
              </li>
            </ul>
          </li>
          <li>
            Unless any Seller listing states, or the parties otherwise agree,
            that the following is not to apply, the Seller agrees with the Buyer
            that, on request by the Buyer, it will take reasonable steps to
            assign to the Buyer ownership of intellectual property rights in
            work that the Seller creates specifically for the Buyer.{' '}
          </li>
          <li>
            You agree to deal with other Users in a polite and courteous manner
            and to respond promptly to communications from other Users.
          </li>
          <li>
            You agree to cooperate reasonably with the Buyer/Seller and to
            supply information reasonably requested by the other.
          </li>
          <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
            <li style={{ listStyle: 'none' }}>
              <em>Credits</em>
            </li>
          </ul>
          <li>
            The Buyer must pay for Freelance Services by means of Credits. We
            may make suggestions but it is up to Sellers to set the number of
            Credits that they wish to charge for the relevant Freelance
            Services.
          </li>
          <li>
            Credits can only be used within our Service. They have no inherent
            value outside our Service, and they are not your own private
            property. We do not provide any cash or refunds for credits. Credits
            are for your personal use only. You must not sell or transfer them
            (other than to pay for Freelance Services within our Service) or
            otherwise make them available to anyone else or attempt to do so or
            encourage anyone else to do any of these things.
          </li>
          <li>
            We retain absolute discretion over Credits including our right to
            allocate, deduct, delete or transfer Credits as we wish.
          </li>
          <li>
            You are entirely responsible for considering and taking your own
            professional advice on any benefit-in-kind or other tax implications
            or liabilities arising from use of our Service and/or the
            supply/receipt of Freelance Services including accounting for any
            tax due. We have no responsibility for any unpaid tax or otherwise
            in connection with tax liabilities.
          </li>
          <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
            <li style={{ listStyle: 'none' }}>
              <em>Completion of job and (if applicable) Disputes</em>
            </li>
          </ul>
          <li>
            It is the responsibility of the Seller to confirm via our Service
            when the job has been completed and delivered. This step is referred
            to below as &ldquo;Completion&rdquo;.
          </li>
          <li>
            If the Buyer either:
            <ul>
              <li>accepts the job after Completion; or</li>
              <li>
                fails within the number of days stated on our Service following
                Completion to accept the job or to request changes or to raise a
                Dispute
              </li>
            </ul>
            we are entitled to release the relevant Credits to the Seller
            (subject to our absolute discretion regarding allocation/transfer of
            Credits as explained above).
          </li>
          <li>
            The Buyer can also raise a Dispute before Completion, for example if
            the Seller does not complete the job within the timescale agreed.
          </li>
          <li>
            The Seller can raise a Dispute at any time, for example if it thinks
            that the Buyer has not provided reasonable cooperation or that the
            Buyer has unreasonably requested changes following Completion.
          </li>
          <li>
            If a Dispute is raised, we will adjudicate on the dispute in our
            absolute discretion and our decision will be final. Our adjudication
            will relate only to allocation of Credits and not any wider aspect
            of the dispute. We are entitled to allocate a full refund to the
            Buyer, to transfer the full Credits to the Seller or to split the
            Credits between the parties as we consider appropriate. Both parties
            shall provide reasonable co-operation including supply of any
            information that we reasonably request. We are entitled to set or
            extend any deadlines we consider appropriate whether to allow the
            parties to try and resolve the dispute themselves, to require
            production of information, to make our decision or otherwise. We
            have no legal liability to either party in relation to our role as
            adjudicator.
          </li>
          <li>
            You agree not to raise a dispute directly with our payment provider
            (e.g., PayPal or Stripe).
          </li>
          <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
            <li style={{ listStyle: 'none' }}>
              <em>
                Payment to Sellers (applies only if payment is made through the
                Service)
              </em>
            </li>
          </ul>
          <li>
            Provided you have complied with your contract with us, we will take
            reasonable steps to credit your account balance with the amount of
            Credits due from the Buyer less any deductions or Buyer refunds
            mentioned below. We will apply the Credits after fourteen business
            days following:
            <ul>
              <li>acceptance by the Buyer; </li>
              <li>
                the Buyer&rsquo;s failure to raise a Dispute or request changes
                within the relevant timescale; or
              </li>
              <li>
                if applicable, following our resolution of any Dispute (if we
                decide to transfer Credits to you).
              </li>
            </ul>
          </li>
          <li>
            We are entitled in our discretion to refund to the Buyer on your
            behalf all or part of any Buyer Credits insofar as the Buyer makes a
            complaint or raises a Dispute or cancels the order within any
            applicable cancellation period or if we otherwise consider it
            appropriate to make such a refund in our discretion (which may be
            based on any cancellation policy which applies at that time).{' '}
          </li>
          <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
            <li style={{ listStyle: 'none' }}>
              <em>General</em>
            </li>
          </ul>
          <li>
            If you haven&apos;t logged into your account for at least a week, we
            are entitled to place your account into vacation mode which means
            that Buyers will not be able to order Freelance Services from you.
          </li>
          <li>
            You acknowledge that we do not guarantee that use of our Service of
            itself will necessarily enable compliance with all applicable laws
            and regulations concerning the Freelance Contract and it is your
            responsibility to satisfy yourself thereof.
          </li>
          <li>
            You acknowledge that we do not guarantee that use of our Service
            will generate any particular level of revenues or suitable
            enquiries.
          </li>
        </ol>
        <li>
          <strong>Your Content (e.g., Seller listings, Reviews)</strong>
          <ol>
            <li>You are responsible for your Content.</li>
            <li>
              You agree that you have (and will keep) all rights needed to
              enable us to use your Content as contemplated by the Service and
              these terms and conditions.
            </li>
            <li>
              If you post a Review, you promise that it is your independent,
              honest, genuine opinion.
            </li>
            <li>
              If you use any features on our Service which enable you to share
              your Content with third party sites, we are not responsible for
              use of your Content on those third party sites.
            </li>
            <li>
              We reserve the right without notice or refund to reject, suspend,
              alter, remove or delete Content or to disclose to the police or
              other relevant authorities or to a complainant any Content or
              behaviour if it is the subject of complaint or where we have
              reason to believe that it breaches our terms and conditions, or
              that such steps are necessary to protect us or others, or that a
              criminal offence may have been committed, or where required by law
              or where requested by the police or other appropriate authorities,
              or if we consider that Content does not meet our quality
              standards. If so, you must not attempt to re-publish or re-send
              the relevant Content.
            </li>
            <li>
              We are not legally responsible if your Content is misused by
              others. You must take reasonable care when deciding which Content
              to display on or send via our Service.
            </li>
            <li>
              We may place advertisements near or within your Content. If so, we
              retain all revenue from such advertisements.
            </li>
            <li>
              It is your responsibility to make your own frequent backups of
              Content if you want protection if it is lost or damaged. We are
              not responsible for such loss or damage.
            </li>
            <li>
              We are allowed to delete your Content without telling you after
              this agreement ends.
            </li>
            <li>
              Uninstalling the App may result in deletion of all Content on your
              device.
            </li>
            <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
              <li style={{ listStyle: 'none' }}>
                <em>Seller listings</em>
              </li>
            </ul>
            <li>
              We reserve the right in our discretion without notice to edit the
              text or layout of your listing to ensure it complies with our
              terms and conditions and otherwise in accordance with how we think
              your presence should appear on our Service.
            </li>
            <li>
              We rank Seller listings based on categories of Freelance Services
              and Reviews or as otherwise explained on our Service. Sellers can
              pay a fee to boost the ranking of their listings.
            </li>
          </ol>
        </li>
        <li>
          <strong>Dealing with other Users…</strong>
          <ol>
            <li>
              You accept that we have no obligation to vet or monitor Users or
              their Content. We don&rsquo;t endorse or recommend any Users. We
              accept no legal responsibility for the accuracy of, or otherwise
              in relation to, any such Content or in connection with any
              dealings between Users. It is your responsibility to carry out
              careful and detailed investigations before dealing with other
              Users including use of or reliance on their Content. You should
              not assume that any Content from another User is accurate and be
              aware that people may not be who they claim to be.
            </li>
            <li>
              You acknowledge that in using the Service you may encounter
              behaviour or Content which you consider inappropriate. If so,
              please email us to our email address shown below<strong> </strong>
              (including if you wish to give us notice of defamatory material).
              Please also use any available blocking mechanisms, seek relevant
              external help If appropriate (e.g., from law enforcement
              authorities) and/or stop using the Service.
            </li>
            <li>
              You acknowledge that we permit Users to post Reviews about you and
              your services (or may do in future) and that these will be
              publicly available for viewing. We are not responsible for
              monitoring or editing Reviews. You acknowledge that such Reviews
              may be critical or defamatory of you.
            </li>
          </ol>
        </li>
        <li>
          <strong>
            Other peoples&rsquo; services / advertising / websites
          </strong>
          <ol>
            <li>
              We may display other peoples&rsquo; services, advertising and /or
              links to other websites. We do not recommend or endorse, nor are
              we legally responsible for, any of these. You use them at your own
              risk.
            </li>
            <li>
              You agree that you are legally bound by the terms and conditions
              of any payment providers whose services you use on our Service. We
              aren&rsquo;t responsible for what they do or don&rsquo;t do.
            </li>
          </ol>
        </li>
        <li>
          <strong>Our guidance</strong>
          <ol>
            <li>
              If we ourselves provide any guidance or other general information
              on or via our Service, we do not guarantee that it is accurate or
              up to date and we do not accept legal responsibility for it.
              Before acting on such information, you must make your own
              appropriate and careful enquiries including as to its accuracy and
              suitability for your purposes. You rely on such information at
              your own risk.
            </li>
          </ol>
        </li>
        <li>
          <strong>If you create an account on our Service</strong>
          <ol>
            <li>
              Unless otherwise specifically stated on our Service, your account
              is for your personal use only. You must not allow any other person
              to use your account unless we specifically say otherwise. You
              agree to take reasonable care to keep your login information
              confidential and to tell us immediately of any apparent breach of
              security such as loss or misuse of a password. You are responsible
              for other people who use your account or identity (unless and to
              the extent that we are at fault).
            </li>
          </ol>
        </li>
        <li>
          <strong>Paying us (if applicable)</strong>

          <ol>
            <li>
              This section applies only to Sellers who pay us subscriptions and
              not to Buyers paying for Freelance Services (which is covered
              above under &ldquo;Freelance Services&rdquo;).
            </li>
            <li>
              Payment for subscriptions is in advance and covers the period
              specified.
            </li>
            <li>
              The prices shown include any applicable VAT unless we say
              otherwise.
            </li>
            <li>
              You may only use any trial period for the purpose of a genuine
              assessment of the Service. You must not attempt to use the Service
              for more than one trial period. We can cancel your trial if we
              find that you have had access to a previous one.
            </li>
            <li>
              Your subscription will continue to be auto-renewed for the
              subscription period you signed up to unless you end your
              subscription with effect from the next renewal date by following
              the instructions on our Service<strong>.</strong> Ending your
              subscription does not entitle you to a refund (unless Consumer
              cooling off rights apply). You authorise us and our payment
              provider to place a hold on, or charge, your payment card for the
              relevant amounts or otherwise take payment whenever payments are
              due in accordance with this agreement. It is your responsibility
              to update your payment card details as necessary.
            </li>
            <li>
              We may at any time change our subscription prices. We will give
              you notice by email at least one month before any price change
              takes effect. If you do not agree with the new price, you should
              end your subscription. Otherwise, the next renewal of your
              subscription after the one month&rsquo;s notice will be at the new
              price.
            </li>
            <li>
              If we have mis-priced any part of our Service, we are not obliged
              to supply the Service at that price provided we notify you. If we
              do notify you, then you can decide if you want to continue with
              the Service at the correct price.
            </li>
            <li>
              You must contact us immediately with full details if you dispute
              any payment.
            </li>
          </ol>
        </li>
        <li>
          <strong>About discount codes</strong>
          <ol>
            <li>
              We may offer discount codes from time to time. Such codes may only
              be applied to purchases made through the account in respect of
              which the discount code was offered and registered and are not
              transferrable or redeemable for cash. Unless otherwise stated:
              codes (1) are only available for future new orders placed online;
              (2) cannot be used retrospectively; (3) can only be redeemed once
              per customer; and (4) expire after 12 months. You cannot use more
              than one discount code per transaction unless we state otherwise;
              if we do so, the order in which the codes are to be applied is in
              our sole discretion.{' '}
            </li>
            <li>
              We reserve the right to reject any discount code if we consider
              that it is being used in breach of these terms. Discount codes are
              subject to any additional specific terms and conditions which are
              specified at the point of issue. We reserve the right to
              discontinue or otherwise modify any discount codes at any time
              without prior notice.
            </li>
          </ol>
        </li>
        <li>
          <strong>Affiliate scheme</strong>
          <ol>
            <li>
              This section of our terms and conditions applies to any referral
              or affiliate scheme on our Service &ndash; except insofar as the
              scheme description on our Service says something different &ndash;
              and provided we have specifically agreed with you in writing that
              the affiliate scheme applies to you.
            </li>
            <li>
              Subject to what we say below, you qualify for the relevant benefit
              if the referred person:
              <ul>
                <li>
                  clicks on the referral link we provide, accepts cookies and
                  registers on our Service within 30 days (or earlier cookie
                  expiry); and
                </li>
                <li>
                  within 12 months of registration makes a payment of Credits as
                  a Buyer that we have credited to the relevant Seller following
                  completion of the job and resolution of any Dispute.
                </li>
              </ul>
              We call this a &ldquo;Referral Event&rdquo;.
            </li>
            <li>
              If you have a &ldquo;business partner account&rdquo;, subject to
              what we say below, you also qualify for the relevant benefit if
              during the affiliation period that we have specified the referred
              person:
              <ul>
                <li>
                  clicks on the referral link we provide, accepts cookies and
                  registers on our Service within 30 days (or earlier cookie
                  expiry); and
                </li>
                <li>
                  within 12 months of registration receives a payment of Credits
                  as a Seller.
                </li>
              </ul>
              We call this a &ldquo;Referral Event&rdquo;.
            </li>
            <li>You cannot refer yourself.</li>
            <li>
              For each qualifying Referral Event, and provided you are still a
              registered User, we will take reasonable steps to pay you by
              crediting your account balance on our Service within 14 days
              thereafter with the relevant number of Credits or, if we have
              specifically agreed in writing to pay you in real money, to pay
              you the amount of commission due by whichever payment method we
              consider appropriate.
            </li>
            <li>
              We can refuse to pay you if we think that you have broken your
              contract with us or haven&rsquo;t complied with any applicable
              scheme requirements or that you have behaved inappropriately
              towards us or other Users or that you have cheated or attempted to
              cheat or if we have not been able to make the payment despite
              making reasonable efforts to do so.
            </li>
            <li>
              The scheme is subject to any deadlines or timescales specified and
              we are anyway entitled to change or end it at any time without
              notice.
            </li>
          </ol>
        </li>
        <li>
          <strong>Support </strong>
          <ol>
            <li>
              The Service includes support only insofar as specifically provided
              for within the Service and, if so, by the specified contact
              methods. Any support service is only intended to address
              configuration and proper use of, or any errors or interruptions
              arising from, our Service.{' '}
            </li>
            <li>
              Unless otherwise stated, we do not guarantee any particular
              response times or outcomes. Any response times given are English
              business hours/days unless we say otherwise.
            </li>
            <li>
              In any event, we aren&rsquo;t obliged to supply support if you owe
              us any money or have otherwise broken this contract.{' '}
            </li>
            <li>
              You acknowledge that the Store has no obligation to supply any
              maintenance and support services in relation to the App.
            </li>
          </ol>
        </li>
        <li>
          <strong>Ending or suspending this contract </strong>
          <ol>
            <li>
              You may at any time end this (platform) contract by emailing us to
              the email address shown below and, if you are an App User, by
              uninstalling the App from all of your devices. (This doesn&rsquo;t
              entitle you to a refund unless you have Consumer &ldquo;cooling
              off&rdquo; rights, explained above.)
            </li>
            <li>
              We are entitled to end this contract or suspend part or all of our
              Service or impose restrictions on our Service if:
              <ul>
                <li>you break this contract;</li>
                <li>
                  you become bankrupt or go into liquidation or similar or
                  become insolvent;
                </li>
                <li>
                  you are subject to repeated User complaints and/or negative
                  Reviews;
                </li>
                <li>
                  any fees payable by you are unpaid / unjustifiably charged
                  back;
                </li>
                <li>
                  acting reasonably, we think that it is necessary to protect
                  you, us or others;
                </li>
                <li>
                  we are required to do so by applicable law or regulation or to
                  comply with an order, instruction or request from a competent
                  authority; or
                </li>
                <li>
                  you or anyone on your behalf acts inappropriately towards our
                  staff.
                </li>
              </ul>
            </li>
            <li>
              If we end the contract, we will give you at least 30 days&rsquo;
              notice unless we have a legal or regulatory obligation, or a legal
              right, to end it earlier, or you have repeatedly broken this
              contract.
            </li>
            <li>
              We are entitled at any time to end this contract if we terminate
              our Service as a whole if in our reasonable opinion it is
              necessary to do so for security, technical or operational reasons.
            </li>
            <li>
              If this contract ends:
              <ul>
                <li>
                  It still continues insofar as necessary to facilitate any
                  pending Freelance Contracts you entered into before
                  termination unless we terminate those contracts.
                </li>
                <li>
                  <strong>
                    Your Credits will be deleted when this agreement ends unless
                    we decide otherwise in our absolute discretion.
                  </strong>
                </li>
                <li>
                  Subject to the above, your right to use our Service and all
                  licences are terminated.
                </li>
                <li>Existing rights and liabilities are unaffected.</li>
                <li>
                  All clauses in this contract which are stated or intended to
                  continue after termination will continue to apply.
                </li>
                <li>
                  After the end of the contract, we may retain access to
                  information provided or generated by Users in order to deal
                  with disputes, enforce our terms and conditions or manage or
                  improve our Service generally. See our{' '}
                  <Link href="/privacy">Privacy Policy</Link> for more
                  information about our retention of personal information.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <strong>If our Service doesn&rsquo;t work properly</strong>
          <ol>
            <li>
              We do not guarantee that the Service will be uninterrupted or
              error-free. We are entitled, without notice and without liability
              (a) to suspend the Service for repair, maintenance, improvement or
              other technical reason and (b) to make changes to the Service.
            </li>
            <li>
              You acknowledge that technology is not always secure and you
              accept the risks inherent in use of the Internet or other
              technology for the purpose of the Service.
            </li>
            <li>
              To enable us to send alerts, you must ensure you give us correct
              contact information and immediately update us if it changes. We
              are not responsible for checking or updating your contact
              information even if we have reason to think that it is wrong or
              out of date (e.g., because our email is returned). In any case,
              you accept the risk that for whatever reason alerts may not be
              correctly sent out by our Service or received by the intended
              recipient and you must diarise key dates and/or follow up
              communications as appropriate.
            </li>
          </ol>
        </li>
        <li>
          <strong>Compatibility of App</strong>
          <ol>
            <li>
              We do not guarantee that the App is or will be compatible with any
              particular mobile devices or associated operating systems
              (OS&rsquo;s). You acknowledge that the supplier of the device or
              OS may issue an update that causes our App to stop working. We may
              issue App updates through the Store; if so, you may not be able to
              use our App properly or at all until you have downloaded the
              update, which may be subject to agreement to new terms and
              conditions. It is your responsibility to frequently monitor for
              App updates and to install them as soon as they become available.
            </li>
          </ol>
        </li>
        <li>
          <strong>Restrictions on </strong>
          <strong>our legal responsibility &ndash; very important</strong>
          <ol>
            <li>
              Nothing in this agreement in any way limits or excludes our
              liability for negligence causing death or personal injury or for
              fraud or fraudulent misrepresentation or for anything which may
              not legally be excluded or limited. In this section, any reference
              to us includes our employees and agents, who have the right to
              enforce this agreement.
            </li>
            <li>
              <em>If you are a Consumer,</em>
              <strong> </strong>we shall not be liable for any loss or damage
              where:
              <ul>
                <li>there is no breach of a legal duty owed to you by us;</li>
                <li>
                  such loss or damage was not reasonably foreseeable (meaning it
                  was not an obvious consequence of our breach or not
                  contemplated by you and us at the time we entered into this
                  contract);
                </li>
                <li>
                  (and to the extent that) such loss or damage is your fault,
                  for example by not complying with this agreement;
                  <strong> </strong>or
                </li>
                <li>such loss or damage relates to a business of yours.</li>
              </ul>
            </li>
            <li>
              <em>If you are a Consumer, </em>you will be responsible to us for
              any reasonably foreseeable loss or damage we suffer (including
              claims made by other people) resulting from your breach of this
              agreement or misuse of our Service.
            </li>
            <li>
              <em>
                The following clauses apply only if you are not a Consumer
              </em>
              :
              <ul>
                <li>
                  To the fullest extent allowed by law, you and we exclude all
                  terms, conditions, warranties and representations howsoever
                  arising, whether imposed by statute or by law or otherwise,
                  that are not expressly stated in this agreement.
                </li>
                <li>
                  Subject to the first paragraph in this section (&ldquo;Nothing
                  in this agreement…&rdquo;), we shall under no circumstances
                  whatever be liable under or in connection with this agreement,
                  whether in contract, tort (including negligence),
                  misrepresentation, breach of statutory duty, or otherwise, for
                  any:
                  <ul>
                    <li>
                      loss of profit; loss of data; loss of use; loss of
                      production; loss of contract; loss of opportunity; loss of
                      savings; or harm to reputation or loss of goodwill; or
                    </li>
                    <li>indirect, consequential or special losses.</li>
                  </ul>
                </li>
                <li>
                  Subject to the first paragraph in this section (&ldquo;Nothing
                  in this agreement…&rdquo;), if you are or were a subscriber,
                  <strong> </strong>our total liability in respect of all other
                  losses arising under or in connection with this agreement
                  whether in contract, tort (including negligence),
                  misrepresentation, breach of statutory duty, or otherwise, for
                  any act or omission or series of connected acts or omissions
                  shall in no circumstances exceed the total fees paid or
                  payable by you to us in connection with our Service in the 12
                  months before the first act or omission complained of.
                </li>
                <li>
                  You agree to indemnify us against all claims and liabilities
                  arising out of or in connection with your use of the Service
                  and/or breach of this agreement (except insofar as we are at
                  fault).
                </li>
                <li>
                  This agreement constitutes the entire agreement between us
                  with respect to its subject matter and supercedes any previous
                  communications or agreements between us. We both acknowledge
                  that there have been no misrepresentations and that neither of
                  us has relied on any pre-contractual statements.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <strong>Intellectual property rights (e.g., copyright)</strong>
          <ol>
            <li>
              If you supply Content for display on our Service, you retain
              ownership of the intellectual property rights. You allow us, at no
              cost and for so long as this contract lasts to use and adapt all
              or part of such material however we wish on our Service as well as
              on other channels including social media, including to enhance,
              redistribute and/or promote our Service. You waive your
              &ldquo;moral rights&rdquo; in relation to such Content to the
              extent legally allowed.
              <strong> </strong>You also allow each User to use your Content in
              accordance with these terms and conditions. You give us the right
              to take any legal action we think necessary if there is an
              infringement of the intellectual property rights in your Content.
            </li>
            <li>
              If you are acting as a Seller: You retain ownership of your logos,
              trade marks and brand names. You are entitled to make your trading
              identity visible on our Service but subject to how we think your
              presence should appear.
            </li>
            <li>
              The intellectual property rights in all Content (excluding your
              Content) used on or in connection with our Service are owned by us
              or by our partners or other Users. For your personal and internal
              business use only, you may view such material on your device. You
              must not otherwise use such material including copying,
              publishing, selling or adapting it or taking extracts from it
              without our specific prior written consent (except to the extent
              specifically allowed by this agreement). You must not misrepresent
              the ownership or source of such material, for example by changing
              or removing any legal notices or author attributions.
            </li>
            <li>
              Just to be clear &ndash; you must not collect, scrape, harvest,
              frame or deep-link to any Content on our Service without our
              specific prior written consent.
            </li>
            <li>
              You must not reverse-engineer or decompile any of our software in
              any way (except to the extent allowed by applicable law). You must
              not create or use a modified or derivative version of our software
              or distribute or sublicense our software to third parties. You
              must take reasonable steps to ensure that our software is not
              disclosed to any third party.
            </li>
          </ol>
        </li>
        <li>
          <strong>
            Your personal information &ndash; see our privacy policy
          </strong>
          <ol>
            <li>
              You agree that we can deal with your personal information in
              accordance with our <Link href="/privacy">Privacy Policy</Link>{' '}
              which may change from time to time.
            </li>
            <li>
              You acknowledge that we do not supply other Users with access to
              any personal or other information provided to us or generated by
              use of our Service except as otherwise explained on our Service or
              our <Link href="privacy">Privacy Policy</Link>. We do not share
              any such information with anyone else except insofar as this is
              necessary for the proper functioning of our Service.
            </li>
          </ol>
        </li>
        <li>
          <strong>Things we can&rsquo;t control</strong>
          <ol>
            <li>
              We are not liable for failure to perform or delay in performing
              any obligation under this agreement if the failure or delay is
              caused by any circumstances beyond our reasonable control
              including third party telecommunication failures and
              epidemics/pandemics.
            </li>
          </ol>
        </li>
        <li>
          <strong>Transferring this contract to someone else</strong>
          <ol>
            <li>
              We may transfer all or part of our rights or duties under this
              agreement provided we take reasonable steps to ensure that your
              rights under this agreement are not prejudiced. As this agreement
              is personal to you, you may not transfer any of your rights or
              duties under it without our prior written consent.
            </li>
          </ol>
        </li>
        <li>
          <strong>English law and courts </strong>
          <ol>
            <li>
              This contract is under English law and any disputes will be
              decided only by the courts of the United Kingdom. If you are a
              Consumer, you will benefit from any mandatory provisions of the
              law of the country in which you are resident. Nothing in these
              terms and conditions affects your rights as a Consumer to rely on
              such mandatory provisions of local law.
            </li>
          </ol>
        </li>
        <li>
          <strong>General but important information</strong>
          <ol>
            <li>
              We may send all notices under this agreement by email to the most
              recent email address you have given us. You can send notices to
              our email address shown below. Headings used in this agreement are
              for information and not binding. If any part of this agreement is
              ineffective or unenforceable for any reason, the rest of the
              agreement will still apply. If either of us overlooks any breach
              of this agreement by the other, it can still be actioned later. A
              person who is not a party to this agreement can&rsquo;t enforce it
              unless the agreement says otherwise. The parties are independent
              contractors and, except as otherwise specifically stated above,
              nothing in this agreement make any party as agent, employee or
              representative of the other.
            </li>
          </ol>
        </li>
        <li>
          <strong>Extra legal terms required by the Store</strong>
          <ol>
            <li>
              In the event of any third party claim that the App or your
              possession and use of the App infringes that third party&rsquo;s
              intellectual property rights, we, not the Store, will be solely
              responsible for the investigation, defence, settlement and
              discharge of any such intellectual property infringement claim.
            </li>
            <li>
              The following applies where Apple Inc is the Store:
              <ul>
                <li>
                  In the event of any failure of the App to conform to any
                  applicable warranty, you may notify Apple, and Apple will
                  refund the purchase price for the App (if applicable). To the
                  maximum extent permitted by applicable law, Apple will have no
                  other warranty obligation whatsoever with respect to the App,
                  and any other claims, losses, liabilities, damages, costs or
                  expenses attributable to any failure to conform to any
                  warranty will be our sole responsibility subject to these
                  terms and conditions.
                </li>
                <li>
                  We, not Apple, are responsible for addressing your claims or
                  the claims of any third party relating to the App or the
                  end-user&rsquo;s possession and/or use of that App, including,
                  but not limited to: (i) product liability claims; (ii) any
                  claim that the App fails to conform to any applicable legal or
                  regulatory requirement; and (iii) claims arising under
                  consumer protection, privacy or similar legislation including
                  use of HealthKit and HomeKit frameworks.
                </li>
              </ul>
            </li>
            <li>
              You acknowledge and agree that the Store, and the Store&rsquo;s
              subsidiaries, are third party beneficiaries of this agreement, and
              that the Store will have the right (and will be deemed to have
              accepted the right) to enforce this agreement against you as a
              third party beneficiary thereof.
            </li>
            <li>
              You agree that (i) you are not located in a country that is
              subject to a U.S. Government embargo, or that has been designated
              by the U.S. Government as a &ldquo;terrorist supporting&rdquo;
              country; and (ii) you are not listed on any U.S. Government list
              of prohibited or restricted parties.
            </li>
          </ol>
        </li>
        <li>
          <strong>Complaints</strong>

          <ol>
            <li>
              If you have any complaints, please contact us via the contact
              details shown below.
            </li>
          </ol>
        </li>
        <li>
          <strong>Company information</strong>
          <ol>
            <li>Company name: Revolancer Ltd</li>
            <li>Trading name: &ldquo;Revolancer&rdquo;</li>
            <li>Country of incorporation: England and Wales</li>
            <li>Registered number: 13149073</li>
            <li>
              Registered office and contact address: Britannia House, Caerphilly
              Business Park, Caerphilly, CF83 3GG, Wales
            </li>
            <li>Contact email address: support@revolancer.com</li>
            <li>
              Support url:{' '}
              <Link href="https://support.revolancer.com/" target="_blank">
                https://support.revolancer.com/
              </Link>
            </li>
            <li>Other contact information: See our website / contact page.</li>
            <li>
              VAT number: <strong>416020154</strong>
            </li>
          </ol>
        </li>
      </ol>
      <p style={{ textAlign: 'center' }}>
        <strong>APPENDIX</strong>
        <br />
        <strong>&ldquo;COOLING OFF&rdquo;</strong>
      </p>
      The following applies if you have the right to cancel your platform
      contract with us.
      <em>Right to cancel</em>
      <ol>
        <li>
          You have the right to cancel the contract within 14 days without
          giving any reason.
        </li>
        <li>
          The cancellation period will expire after 14 days from the day when we
          enter a legal contract with you (i.e., when you register to use our
          platform Service).
        </li>
        <li>
          To exercise the right to cancel, you must inform Revolancer Ltd,
          Britannia House, Caerphilly Business Park, Caerphilly, CF83 3GG, Wales
          (email address above) (on behalf the Seller if you are cancelling the
          Freelance Contract) of your decision to cancel the contract by a clear
          statement (e.g., a letter sent by post or e-mail). You may use the
          model cancellation form below but it is not obligatory.
        </li>

        <li>
          To meet the cancellation deadline, it is sufficient for you to send
          your communication concerning your exercise of the right to cancel
          before the cancellation period has expired.
        </li>
        <ul style={{ paddingInlineStart: '0', marginBlockStart: '12px' }}>
          <li style={{ listStyle: 'none' }}>
            <em>Effects of cancellation</em>
          </li>
        </ul>
        <li>
          If you cancel this contract, we will reimburse to you all payments
          received from you.
        </li>
        <li>
          The reimbursement will be made without undue delay, and not later than
          14 days after the day on which we are informed about your decision to
          cancel this contract.
        </li>
        <li>
          The reimbursement will be made using the same means of payment as you
          used for the initial transaction, unless you have expressly agreed
          otherwise; in any event, you will not incur any fees as a result of
          the reimbursement.
        </li>
        <li>
          If you requested us to begin the performance of services during the
          cancellation period, you shall pay us an amount which is in proportion
          to what has been performed until you have communicated to us your
          cancellation of this contract in comparison with the full coverage of
          the contract.
        </li>
      </ol>
      <strong>MODEL CANCELLATION FORM</strong>
      <p>
        Complete and return this form only if you wish to cancel the contract:
        <br />
        — To Revolancer Ltd, Britannia House, Caerphilly Business Park,
        Caerphilly, CF83 3GG, (email address above):
        <br />
        — I/We [*] hereby give notice that I/We [*] cancel my/our [*] contract
        of sale of the following goods [*]/ for the supply of the following
        service [*],
        <br />
        — Ordered on [*]/received on [*],
        <br />— Name of consumer(<em>s</em>),
        <br />— Address of consumer(<em>s</em>),
        <br />— Signature of consumer(<em>s</em>) (only if this form is notified
        on paper),
        <br />
        — Date
        <br />
        [*] Delete as appropriate
      </p>
    </Flex>
  );
};
