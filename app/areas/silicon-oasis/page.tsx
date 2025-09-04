import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/silicon-oasis'];

export default function SiliconOasisPage() {
  return <AreaPageClient areaSlug="silicon-oasis" />;
}
