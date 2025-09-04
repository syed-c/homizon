import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-satwa/satwa-central'] || {
  title: 'Bathroom Deep Cleaning in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}