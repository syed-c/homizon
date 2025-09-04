import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/al-barsha/al-barsha-2'] || {
  title: 'Handyman Services in Al Barsha 2 - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Barsha 2. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlBarsha2Page() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-2"
      subareaName="Al Barsha 2"
    />
  );
}