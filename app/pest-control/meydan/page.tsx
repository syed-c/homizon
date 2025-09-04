import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/meydan'] || {
  title: 'Pest Control in Meydan - Professional Services | HOMIZON',
  description: 'Professional pest control services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="meydan"
      areaName="Meydan"
    />
  );
}