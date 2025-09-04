import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-garhoud/dubai-creek-golf'] || {
  title: 'Handyman Services in Dubai Creek Golf, Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Creek Golf, Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlGarhoudDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-garhoud"
      areaName="Al Garhoud"
      subArea="dubai-creek-golf"
      subAreaName="Dubai Creek Golf"
    />
  );
}