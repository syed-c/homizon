import type { Metadata } from 'next';
import siteMetadata from './metadata.json';
import DynamicHomePageContent from '@/components/dynamic-home-page-content';

export const metadata: Metadata = siteMetadata['/'];

export default function HomePage() {
  return <DynamicHomePageContent />;
}
