import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/bur-dubai/al-fahidi'] || {
  title: 'AC Servicing in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}