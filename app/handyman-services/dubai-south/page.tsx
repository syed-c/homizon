import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-south'] || {
  title: 'Handyman Services in Dubai South - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}