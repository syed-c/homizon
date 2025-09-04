import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-satwa/al-satwa-residential'] || {
  title: 'Handyman Services in Al Satwa Residential, Al Satwa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Satwa Residential, Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlSatwaAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-satwa"
      areaName="Al Satwa"
      subArea="al-satwa-residential"
      subAreaName="Al Satwa Residential"
    />
  );
}