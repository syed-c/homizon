import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/mirdif'] || {
  title: 'Handyman Services in Mirdif - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesMirdifPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="mirdif"
      areaName="Mirdif"
      
      
    />
  );
}