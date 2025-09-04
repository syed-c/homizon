import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jvc/jvc-district-3'] || {
  title: 'Handyman Services in Jvc District 3, JVC - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Jvc District 3, JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJvcJvcDistrict3Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jvc"
      areaName="JVC"
      subArea="jvc-district-3"
      subAreaName="Jvc District 3"
    />
  );
}