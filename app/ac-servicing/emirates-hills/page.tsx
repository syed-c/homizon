import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/emirates-hills'] || {
  title: 'AC Servicing in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}