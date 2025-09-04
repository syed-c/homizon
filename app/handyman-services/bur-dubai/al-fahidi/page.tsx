import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/bur-dubai/al-fahidi'] || {
  title: 'Handyman Services in Al Fahidi, Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Fahidi, Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBurDubaiAlFahidiPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="bur-dubai"
      areaName="Bur Dubai"
      subArea="al-fahidi"
      subAreaName="Al Fahidi"
    />
  );
}