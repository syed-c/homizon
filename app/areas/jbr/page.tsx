import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jbr'];

export default function JBRPage() {
  return <AreaPageClient areaSlug="jbr" />;
}
