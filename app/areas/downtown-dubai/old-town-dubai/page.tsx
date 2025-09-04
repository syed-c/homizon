import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/downtown-dubai/old-town-dubai'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="downtown-dubai" subAreaSlug="old-town-dubai" />;
}
