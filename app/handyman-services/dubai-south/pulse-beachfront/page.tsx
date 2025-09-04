import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-south/pulse-beachfront'] || {
  title: 'Handyman Services in Pulse Beachfront, Dubai South - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Pulse Beachfront, Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiSouthPulseBeachfrontPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-south"
      areaName="Dubai South"
      subArea="pulse-beachfront"
      subAreaName="Pulse Beachfront"
    />
  );
}