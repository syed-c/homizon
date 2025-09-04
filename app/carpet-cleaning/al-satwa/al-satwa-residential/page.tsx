import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-satwa/al-satwa-residential'] || {
  title: 'Carpet Cleaning in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}