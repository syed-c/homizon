import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/arabian-ranches/mirador'] || {
  title: 'Handyman Services in Mirador, Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Mirador, Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesArabianRanchesMiradorPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subArea="mirador"
      subAreaName="Mirador"
    />
  );
}