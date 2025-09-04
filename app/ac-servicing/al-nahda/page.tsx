import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-nahda'] || {
  title: 'AC Servicing in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}