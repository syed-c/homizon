import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jumeirah/al-wasl'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="jumeirah" subAreaSlug="al-wasl" />;
}
