import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-greens/al-ghaf'] || {
  title: 'Pest Control in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}