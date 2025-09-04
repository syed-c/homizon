import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/arabian-ranches/alvorada'] || {
  title: 'Handyman Services in Alvorada, Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Alvorada, Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesArabianRanchesAlvoradaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subArea="alvorada"
      subAreaName="Alvorada"
    />
  );
}