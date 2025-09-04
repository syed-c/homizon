import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/deira/spice-souk-area'] || {
  title: 'Carpet Cleaning in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}