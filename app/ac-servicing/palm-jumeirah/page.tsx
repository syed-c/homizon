import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/palm-jumeirah'] || {
  title: 'AC Servicing in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}