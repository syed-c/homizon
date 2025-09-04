import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-khawaneej'];

export default function AlKhawaneejPage() {
  return <AreaPageClient areaSlug="al-khawaneej" />;
}
