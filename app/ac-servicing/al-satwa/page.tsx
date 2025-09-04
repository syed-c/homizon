import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-satwa'] || {
  title: 'AC Servicing in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlSatwaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-satwa"
      areaName="Al Satwa"
    />
  );
}