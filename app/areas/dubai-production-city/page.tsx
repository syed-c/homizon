import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-production-city'];

export default function DubaiProductionCityPage() {
  return <AreaPageClient areaSlug="dubai-production-city" />;
}
