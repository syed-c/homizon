import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-investment-park'];

export default function DubaiInvestmentParkPage() {
  return <AreaPageClient areaSlug="dubai-investment-park" />;
}
