import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jumeirah'] || {
  title: 'AC Servicing in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}