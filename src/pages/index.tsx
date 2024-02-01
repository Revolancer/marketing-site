import Head from 'next/head';
import { PrimaryLayout } from '@/components/layout/layout';
import { Construction } from '@/components/homepage/construction';

export default function Index() {
  return (
    <PrimaryLayout>
      <Head>
        <title>
          Revolancer - Freelance Marketplace | Exchange services and skills
        </title>
      </Head>
      <Construction />
    </PrimaryLayout>
  );
}
