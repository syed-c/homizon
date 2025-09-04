import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/deira/spice-souk-area'] || {
  title: 'Handyman Services in Spice Souk Area, Deira - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Spice Souk Area, Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDeiraSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="deira"
      areaName="Deira"
      subArea="spice-souk-area"
      subAreaName="Spice Souk Area"
    />
  );
}