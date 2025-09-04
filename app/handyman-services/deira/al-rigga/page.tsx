import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/deira/al-rigga'] || {
  title: 'Handyman Services in Al Rigga, Deira - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Rigga, Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDeiraAlRiggaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="deira"
      areaName="Deira"
      subArea="al-rigga"
      subAreaName="Al Rigga"
    />
  );
}