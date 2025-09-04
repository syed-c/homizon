import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-barsha'];

export default function AlBarshaPage() {
  return <AreaPageClient areaSlug="al-barsha" />;
}
