import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-twar'] || {
  title: 'Carpet Cleaning in Al Twar - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}