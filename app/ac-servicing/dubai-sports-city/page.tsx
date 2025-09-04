import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-sports-city'];

export default async function ACServicingInDubaiSportsCityPage() {
  return <ServiceAreaPageClient serviceSlug="ac-servicing" areaSlug="dubai-sports-city" />;
}
