import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jebel-ali'];

export default function JebelAliPage() {
  return <AreaPageClient areaSlug="jebel-ali" />;
}
