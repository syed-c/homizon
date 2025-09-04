import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-rashidiya/rashidiya-2'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-rashidiya" subAreaSlug="rashidiya-2" />;
}
