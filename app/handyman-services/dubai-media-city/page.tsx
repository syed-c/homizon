import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-media-city'] || {
  title: 'Handyman Services in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiMediaCityPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-media-city"
      areaName="Dubai Media City"
      
      
    />
  );
}