import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-barari'];

export default function AlBarariPage() {
  return <AreaPageClient areaSlug="al-barari" />;
}
