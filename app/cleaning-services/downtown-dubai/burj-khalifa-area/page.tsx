import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/downtown-dubai/burj-khalifa-area'] || {
  title: 'Cleaning Services in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}