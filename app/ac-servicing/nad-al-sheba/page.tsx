import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/nad-al-sheba'] || {
  title: 'AC Servicing in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}