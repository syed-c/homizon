import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-greens'];

export default function TheGreensPage() {
  return <AreaPageClient areaSlug="the-greens" />;
}
