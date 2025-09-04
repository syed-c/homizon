import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-sports-city/golf-horizon'] || {
  title: 'AC Cleaning & Sanitization in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}