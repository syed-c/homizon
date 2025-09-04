import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-marina'] || {
  title: 'Bathroom Deep Cleaning in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}