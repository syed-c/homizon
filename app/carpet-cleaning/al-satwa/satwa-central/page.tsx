import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-satwa/satwa-central'] || {
  title: 'Carpet Cleaning in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}