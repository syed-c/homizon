import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-hills-estate/golf-suites'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="dubai-hills-estate" subAreaSlug="golf-suites" />;
}
