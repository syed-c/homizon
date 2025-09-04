import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jbr/bahar'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="jbr" subAreaSlug="bahar" />;
}
