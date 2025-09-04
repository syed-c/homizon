import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-south/golf-links'] || {
  title: 'Cleaning Services in Golf Links - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}