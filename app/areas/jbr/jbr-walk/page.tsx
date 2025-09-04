import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jbr/jbr-walk'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="jbr" subAreaSlug="jbr-walk" />;
}
