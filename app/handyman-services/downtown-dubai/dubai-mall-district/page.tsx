import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/downtown-dubai/dubai-mall-district'] || {
  title: 'Handyman Services in Dubai Mall District, Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Mall District, Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDowntownDubaiDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subArea="dubai-mall-district"
      subAreaName="Dubai Mall District"
    />
  );
}