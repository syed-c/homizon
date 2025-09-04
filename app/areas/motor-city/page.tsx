import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/motor-city'];

export default function MotorCityPage() {
  return <AreaPageClient areaSlug="motor-city" />;
}
