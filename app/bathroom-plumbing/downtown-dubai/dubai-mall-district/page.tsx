import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/downtown-dubai/dubai-mall-district'] || {
  title: 'Bathroom Plumbing in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}