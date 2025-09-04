import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/discovery-gardens'];

export default function DiscoveryGardensPage() {
  return <AreaPageClient areaSlug="discovery-gardens" />;
}
