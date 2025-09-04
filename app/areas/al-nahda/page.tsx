import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-nahda'];

export default function AlNahdaPage() {
  return <AreaPageClient areaSlug="al-nahda" />;
}
