import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-creek-harbour/creek-gate'] || {
  title: 'Handyman Services in Creek Gate, Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Creek Gate, Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiCreekHarbourCreekGatePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subArea="creek-gate"
      subAreaName="Creek Gate"
    />
  );
}