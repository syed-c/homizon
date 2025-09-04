import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/deira/spice-souk-area'] || {
  title: 'AC Servicing in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}