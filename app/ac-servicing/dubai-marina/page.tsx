import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-marina'] || {
  title: 'AC Servicing in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}