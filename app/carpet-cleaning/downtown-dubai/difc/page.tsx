import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/downtown-dubai/difc'] || {
  title: 'Carpet Cleaning in DIFC - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in DIFC. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDIFCPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="difc"
      subareaName="DIFC"
    />
  );
}