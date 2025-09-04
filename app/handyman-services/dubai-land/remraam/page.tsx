import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-land/remraam'] || {
  title: 'Handyman Services in Remraam, Dubai Land - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Remraam, Dubai Land. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiLandRemraamPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-land"
      areaName="Dubai Land"
      subArea="remraam"
      subAreaName="Remraam"
    />
  );
}