import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/downtown-dubai/burj-khalifa-area'] || {
  title: 'Bathroom Plumbing in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}