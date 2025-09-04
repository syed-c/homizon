import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-knowledge-park'];

export default function DubaiKnowledgeParkPage() {
  return <AreaPageClient areaSlug="dubai-knowledge-park" />;
}
