import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-barsha/al-barsha-2'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-barsha" subAreaSlug="al-barsha-2" />;
}
