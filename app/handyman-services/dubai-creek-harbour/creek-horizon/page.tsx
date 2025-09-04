import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-creek-harbour/creek-horizon'] || {
  title: 'Handyman Services in Creek Horizon, Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Creek Horizon, Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiCreekHarbourCreekHorizonPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subArea="creek-horizon"
      subAreaName="Creek Horizon"
    />
  );
}