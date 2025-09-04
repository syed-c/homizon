import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/discovery-gardens'] || {
  title: 'AC Servicing in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}