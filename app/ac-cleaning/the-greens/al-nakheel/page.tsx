import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-greens/al-nakheel'] || {
  title: 'AC Cleaning & Sanitization in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}