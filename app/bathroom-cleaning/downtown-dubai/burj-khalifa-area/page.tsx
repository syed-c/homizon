import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/downtown-dubai/burj-khalifa-area'] || {
  title: 'Bathroom Deep Cleaning in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}