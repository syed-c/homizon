import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-south'];

export default function DubaiSouthPage() {
  return <AreaPageClient areaSlug="dubai-south" />;
}
