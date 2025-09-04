import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/downtown-dubai'] || {
  title: 'Carpet Cleaning in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}