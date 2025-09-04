import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/deira/spice-souk-area'] || {
  title: 'Bathroom Deep Cleaning in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}