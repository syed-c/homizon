import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah/umm-suqeim'] || {
  title: 'Carpet Cleaning in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}