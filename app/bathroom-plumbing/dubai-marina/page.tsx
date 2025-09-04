import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-marina'] || {
  title: 'Bathroom Plumbing in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}