import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/palm-jumeirah/trunk'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="palm-jumeirah" subAreaSlug="trunk" />;
}
