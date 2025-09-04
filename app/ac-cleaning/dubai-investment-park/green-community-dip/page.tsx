import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-investment-park/green-community-dip'] || {
  title: 'AC Cleaning & Sanitization in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}