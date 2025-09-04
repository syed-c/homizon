import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/bur-dubai/al-fahidi'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="bur-dubai" subAreaSlug="al-fahidi" />;
}
