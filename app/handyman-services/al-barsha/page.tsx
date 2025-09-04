import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-barsha'] || {
  title: 'Handyman Services in Al Barsha - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlBarshaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-barsha"
      areaName="Al Barsha"
      
      
    />
  );
}