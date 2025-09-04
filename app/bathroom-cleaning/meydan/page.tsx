import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/meydan'] || {
  title: 'Bathroom Deep Cleaning in Meydan - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="meydan"
      areaName="Meydan"
    />
  );
}