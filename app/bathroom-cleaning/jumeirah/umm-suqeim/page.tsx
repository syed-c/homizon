import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jumeirah/umm-suqeim'] || {
  title: 'Bathroom Deep Cleaning in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}