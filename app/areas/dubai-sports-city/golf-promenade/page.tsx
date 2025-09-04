import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-sports-city/golf-promenade'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="dubai-sports-city" subAreaSlug="golf-promenade" />;
}
