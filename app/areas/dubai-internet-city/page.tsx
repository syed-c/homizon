import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-internet-city'];

export default function DubaiInternetCityPage() {
  return <AreaPageClient areaSlug="dubai-internet-city" />;
}
