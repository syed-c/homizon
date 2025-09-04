import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/al-barsha/al-barsha-1'] || {
  title: 'Handyman Services in Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlBarsha1Page() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-1"
      subareaName="Al Barsha 1"
    />
  );
}