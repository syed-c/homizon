import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-creek-harbour'] || {
  title: 'Handyman Services in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      
      
    />
  );
}