import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/mirdif'];

export default function MirdifPage() {
  return <AreaPageClient areaSlug="mirdif" />;
}
