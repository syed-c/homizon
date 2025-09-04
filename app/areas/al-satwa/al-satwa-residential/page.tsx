import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-satwa/al-satwa-residential'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-satwa" subAreaSlug="al-satwa-residential" />;
}
