import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/downtown-dubai/dubai-mall-district'] || {
  title: 'Carpet Cleaning in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}