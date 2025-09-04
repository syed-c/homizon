import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-views/golf-tower'] || {
  title: 'AC Cleaning & Sanitization in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}