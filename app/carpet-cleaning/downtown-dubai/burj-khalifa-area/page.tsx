import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/downtown-dubai/burj-khalifa-area'] || {
  title: 'Carpet Cleaning in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}