import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-investment-park'] || {
  title: 'Handyman Services in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      
      
    />
  );
}