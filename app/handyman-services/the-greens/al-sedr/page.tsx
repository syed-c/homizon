import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-greens/al-sedr'] || {
  title: 'Handyman Services in Al Sedr, The Greens - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Sedr, The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheGreensAlSedrPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-greens"
      areaName="The Greens"
      subArea="al-sedr"
      subAreaName="Al Sedr"
    />
  );
}