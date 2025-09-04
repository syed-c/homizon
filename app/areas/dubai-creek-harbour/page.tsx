import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-creek-harbour'];

export default function DubaiCreekHarbourPage() {
  return <AreaPageClient areaSlug="dubai-creek-harbour" />;
}
