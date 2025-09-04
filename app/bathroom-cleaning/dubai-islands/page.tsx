import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-islands'] || {
  title: 'Bathroom Deep Cleaning in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}