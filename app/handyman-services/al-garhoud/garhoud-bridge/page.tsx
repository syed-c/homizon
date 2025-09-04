import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-garhoud/garhoud-bridge'] || {
  title: 'Handyman Services in Garhoud Bridge, Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Garhoud Bridge, Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlGarhoudGarhoudBridgePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-garhoud"
      areaName="Al Garhoud"
      subArea="garhoud-bridge"
      subAreaName="Garhoud Bridge"
    />
  );
}