import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/silicon-oasis/silicon-gates'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="silicon-oasis" subAreaSlug="silicon-gates" />;
}
