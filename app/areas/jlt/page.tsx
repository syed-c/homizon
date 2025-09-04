import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jlt'];

export default function JLTPage() {
  return <AreaPageClient areaSlug="jlt" />;
}
