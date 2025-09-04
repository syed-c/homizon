import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/bluewaters-island'];

export default function BluewatersIslandPage() {
  return <AreaPageClient areaSlug="bluewaters-island" />;
}
