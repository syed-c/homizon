import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/deira/spice-souk-area'] || {
  title: 'Bathroom Plumbing in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}