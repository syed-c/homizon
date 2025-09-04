import type { Metadata } from 'next';
import siteMetadata from './metadata.json';
import HomePageContent from '@/components/home-page-content';

export const metadata: Metadata = siteMetadata['/'];

export default function HomePage() {
  return <HomePageContent />;
}
