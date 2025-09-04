import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-qusais'] || {
  title: 'Carpet Cleaning in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}