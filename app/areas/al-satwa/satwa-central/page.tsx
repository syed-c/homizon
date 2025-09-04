import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-satwa/satwa-central'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-satwa" subAreaSlug="satwa-central" />;
}
