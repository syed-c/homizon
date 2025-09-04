import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/deira/al-sabkha'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="deira" subAreaSlug="al-sabkha" />;
}
