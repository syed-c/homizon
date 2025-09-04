import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/silicon-central'];

export default function SiliconCentralPage() {
  return <AreaPageClient areaSlug="silicon-central" />;
}
