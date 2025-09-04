import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-rashidiya'] || {
  title: 'Handyman Services in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlRashidiyaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      
      
    />
  );
}