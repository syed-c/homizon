import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/downtown-dubai/burj-khalifa-area'] || {
  title: 'AC Cleaning & Sanitization in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}