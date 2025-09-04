import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-barsha/al-barsha-south'] || {
  title: 'AC Servicing in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}