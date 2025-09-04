import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-internet-city'] || {
  title: 'Handyman Services in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiInternetCityPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
      
      
    />
  );
}