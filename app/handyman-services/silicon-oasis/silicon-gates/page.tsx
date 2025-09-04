import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/silicon-oasis/silicon-gates'] || {
  title: 'Handyman Services in Silicon Gates - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Silicon Gates. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesSiliconGatesPage() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-gates"
      subareaName="Silicon Gates"
    />
  );
}