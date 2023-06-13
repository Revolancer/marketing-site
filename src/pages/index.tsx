import { Apply } from "@/components/homepage/apply";
import { Build } from "@/components/homepage/build";
import { CommunityLeaders } from "@/components/homepage/community-leaders";
import { ExchangeShowcaseConnect } from "@/components/homepage/exchange-showcase-connect";
import { FAQs } from "@/components/homepage/faqs";
import { Globe } from "@/components/homepage/globe";
import { Grow } from "@/components/homepage/grow";
import { Hero } from "@/components/homepage/hero";
import { Join } from "@/components/homepage/join";
import { SeenIn } from "@/components/homepage/seenin";
import { PrimaryLayout } from "@/components/layout/layout";

export default function Index() {
  return (
    <PrimaryLayout>
      <Hero />
      <SeenIn />
      <ExchangeShowcaseConnect />
      <a id="works" href="#" />
      <Globe />
      <Grow />
      <Build />
      <Apply />
      <CommunityLeaders />
      <Join />
      <FAQs />
    </PrimaryLayout>
  );
}
