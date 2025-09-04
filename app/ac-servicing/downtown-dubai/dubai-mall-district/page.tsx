import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/downtown-dubai/dubai-mall-district'] || {
  title: 'AC Servicing in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}