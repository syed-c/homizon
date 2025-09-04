import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/deira/gold-souk-area'] || {
  title: 'Handyman Services in Gold Souk Area, Deira - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Gold Souk Area, Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDeiraGoldSoukAreaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="deira"
      areaName="Deira"
      subArea="gold-souk-area"
      subAreaName="Gold Souk Area"
    />
  );
}