import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/meydan'] || {
  title: 'Bathroom Plumbing in Meydan - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="meydan"
      areaName="Meydan"
    />
  );
}