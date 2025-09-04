import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-south/golf-links'] || {
  title: 'Carpet Cleaning in Golf Links - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}