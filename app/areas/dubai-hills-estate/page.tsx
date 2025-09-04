import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-hills-estate'];

export default function DubaiHillsEstatePage() {
  return <AreaPageClient areaSlug="dubai-hills-estate" />;
}
