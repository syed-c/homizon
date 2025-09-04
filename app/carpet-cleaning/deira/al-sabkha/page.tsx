import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/deira/al-sabkha'] || {
  title: 'Carpet Cleaning in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}