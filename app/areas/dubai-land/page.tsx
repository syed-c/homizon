import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-land'];

export default function DubaiLandPage() {
  return <AreaPageClient areaSlug="dubai-land" />;
}
