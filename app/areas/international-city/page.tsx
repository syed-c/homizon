import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/international-city'];

export default function InternationalCityPage() {
  return <AreaPageClient areaSlug="international-city" />;
}
