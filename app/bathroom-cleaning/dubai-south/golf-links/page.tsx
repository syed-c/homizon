import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-south/golf-links'] || {
  title: 'Bathroom Deep Cleaning in Golf Links - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}