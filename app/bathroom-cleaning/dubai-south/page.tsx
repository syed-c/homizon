import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-south'] || {
  title: 'Bathroom Deep Cleaning in Dubai South - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}