import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/deira/port-saeed'] || {
  title: 'Handyman Services in Port Saeed, Deira - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Port Saeed, Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDeiraPortSaeedPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="deira"
      areaName="Deira"
      subArea="port-saeed"
      subAreaName="Port Saeed"
    />
  );
}