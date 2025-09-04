import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/emirates-hills'];

export default function EmiratesHillsPage() {
  return <AreaPageClient areaSlug="emirates-hills" />;
}
