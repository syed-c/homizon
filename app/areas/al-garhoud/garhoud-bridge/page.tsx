import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-garhoud/garhoud-bridge'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-garhoud" subAreaSlug="garhoud-bridge" />;
}
