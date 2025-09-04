import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/downtown-dubai/burj-khalifa-area'] || {
  title: 'AC Servicing in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}