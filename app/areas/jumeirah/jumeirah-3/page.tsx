import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jumeirah/jumeirah-3'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="jumeirah" subAreaSlug="jumeirah-3" />;
}
