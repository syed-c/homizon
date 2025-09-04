import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-nahda/nahda-2'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-nahda" subAreaSlug="nahda-2" />;
}
