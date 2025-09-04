import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-islands'];

export default function DubaiIslandsPage() {
  return <AreaPageClient areaSlug="dubai-islands" />;
}
