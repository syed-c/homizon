import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/deira/al-rigga'] || {
  title: 'AC Cleaning & Sanitization in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}