import { Hero } from "@/components/homepage/hero";
import { SeenIn } from "@/components/homepage/seenin";
import { PrimaryLayout } from "@/components/layout/layout";

export default function Index() {
  return (
    <PrimaryLayout>
      <Hero />
      <SeenIn />
    </PrimaryLayout>
  );
}
