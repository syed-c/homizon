import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-views/golf-tower'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="the-views" subAreaSlug="golf-tower" />;
}
