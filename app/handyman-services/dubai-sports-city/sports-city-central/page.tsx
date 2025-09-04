import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-sports-city/sports-city-central'] || {
  title: 'Handyman Services in Sports City Central, Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Sports City Central, Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiSportsCitySportsCityCentralPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subArea="sports-city-central"
      subAreaName="Sports City Central"
    />
  );
}