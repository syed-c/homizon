import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/downtown-dubai'] || {
  title: 'Bathroom Deep Cleaning in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}