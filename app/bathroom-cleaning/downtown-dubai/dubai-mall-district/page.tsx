import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/downtown-dubai/dubai-mall-district'] || {
  title: 'Bathroom Deep Cleaning in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}