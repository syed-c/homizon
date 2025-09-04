import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-south'] || {
  title: 'AC Servicing in Dubai South - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}