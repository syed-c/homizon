import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/downtown-dubai'];

export default function DowntownDubaiPage() {
  return <AreaPageClient areaSlug="downtown-dubai" />;
}
