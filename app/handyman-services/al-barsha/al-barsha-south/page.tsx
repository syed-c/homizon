import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-barsha/al-barsha-south'] || {
  title: 'Handyman Services in Al Barsha South, Al Barsha - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Barsha South, Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlBarshaAlBarshaSouthPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-barsha"
      areaName="Al Barsha"
      subArea="al-barsha-south"
      subAreaName="Al Barsha South"
    />
  );
}