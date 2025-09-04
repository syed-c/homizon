import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-garhoud'] || {
  title: 'Carpet Cleaning in Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlGarhoudPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-garhoud"
      areaName="Al Garhoud"
    />
  );
}