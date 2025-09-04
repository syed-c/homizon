import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-satwa'] || {
  title: 'Carpet Cleaning in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlSatwaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-satwa"
      areaName="Al Satwa"
    />
  );
}