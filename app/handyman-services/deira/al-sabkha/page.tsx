import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/deira/al-sabkha'] || {
  title: 'Handyman Services in Al Sabkha, Deira - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Sabkha, Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDeiraAlSabkhaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="deira"
      areaName="Deira"
      subArea="al-sabkha"
      subAreaName="Al Sabkha"
    />
  );
}