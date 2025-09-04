import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/meydan'] || {
  title: 'AC Servicing in Meydan - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="meydan"
      areaName="Meydan"
    />
  );
}