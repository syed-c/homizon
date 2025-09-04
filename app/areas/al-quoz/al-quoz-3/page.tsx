import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-quoz/al-quoz-3'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-quoz" subAreaSlug="al-quoz-3" />;
}
