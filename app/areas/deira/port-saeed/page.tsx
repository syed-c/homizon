import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/deira/port-saeed'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="deira" subAreaSlug="port-saeed" />;
}
