import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jbr/beach-residence-3'] || {
  title: 'Handyman Services in Beach Residence 3, JBR - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Beach Residence 3, JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJbrBeachResidence3Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jbr"
      areaName="JBR"
      subArea="beach-residence-3"
      subAreaName="Beach Residence 3"
    />
  );
}