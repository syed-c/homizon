import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-marina/marina-crown'] || {
  title: 'AC Cleaning & Sanitization in Marina Crown - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Marina Crown. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMarinaCrownPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-crown"
      subareaName="Marina Crown"
    />
  );
}