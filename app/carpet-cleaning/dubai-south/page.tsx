import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-south'] || {
  title: 'Carpet Cleaning in Dubai South - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}