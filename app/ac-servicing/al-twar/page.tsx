import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-twar'] || {
  title: 'AC Servicing in Al Twar - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}