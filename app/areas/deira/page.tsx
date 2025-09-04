import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/deira'];

export default function DeiraPage() {
  return <AreaPageClient areaSlug="deira" />;
}
