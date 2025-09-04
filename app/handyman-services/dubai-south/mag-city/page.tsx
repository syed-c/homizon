import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-south/mag-city'] || {
  title: 'Handyman Services in Mag City, Dubai South - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Mag City, Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiSouthMagCityPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-south"
      areaName="Dubai South"
      subArea="mag-city"
      subAreaName="Mag City"
    />
  );
}