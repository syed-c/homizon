import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-warqa/warqa-2'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-warqa" subAreaSlug="warqa-2" />;
}
