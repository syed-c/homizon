import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah/umm-suqeim'] || {
  title: 'Handyman Services in Umm Suqeim, Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Umm Suqeim, Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahUmmSuqeimPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      subArea="umm-suqeim"
      subAreaName="Umm Suqeim"
    />
  );
}