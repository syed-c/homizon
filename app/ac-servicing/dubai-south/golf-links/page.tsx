import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-south/golf-links'] || {
  title: 'AC Servicing in Golf Links - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}