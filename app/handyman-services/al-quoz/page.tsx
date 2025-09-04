import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-quoz'] || {
  title: 'Handyman Services in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlQuozPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-quoz"
      areaName="Al Quoz"
      
      
    />
  );
}