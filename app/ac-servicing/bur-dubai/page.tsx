import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/bur-dubai'] || {
  title: 'AC Servicing in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}