import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/al-barari'] || {
  title: 'Handyman Services in Al Barari - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}