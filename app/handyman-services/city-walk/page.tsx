import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/city-walk'] || {
  title: 'Handyman Services in City Walk - Professional Services | HOMIZON',
  description: 'Professional handyman services services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesCityWalkPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="city-walk"
      areaName="City Walk"
      
      
    />
  );
}