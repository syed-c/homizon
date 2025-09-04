import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-hills-estate/parkway'] || {
  title: 'Handyman Services in Parkway, Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Parkway, Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiHillsEstateParkwayPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subArea="parkway"
      subAreaName="Parkway"
    />
  );
}