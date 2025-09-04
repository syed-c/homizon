import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-land/living-legends'] || {
  title: 'AC Cleaning & Sanitization in Living Legends - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}