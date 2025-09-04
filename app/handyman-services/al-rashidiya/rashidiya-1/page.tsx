import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-rashidiya/rashidiya-1'] || {
  title: 'Handyman Services in Rashidiya 1, Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Rashidiya 1, Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlRashidiyaRashidiya1Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subArea="rashidiya-1"
      subAreaName="Rashidiya 1"
    />
  );
}