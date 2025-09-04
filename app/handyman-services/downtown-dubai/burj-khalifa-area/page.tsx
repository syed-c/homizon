import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/downtown-dubai/burj-khalifa-area'] || {
  title: 'Handyman Services in Burj Khalifa Area, Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Burj Khalifa Area, Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDowntownDubaiBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subArea="burj-khalifa-area"
      subAreaName="Burj Khalifa Area"
    />
  );
}