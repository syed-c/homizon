import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-furjan'] || {
  title: 'AC Servicing in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}