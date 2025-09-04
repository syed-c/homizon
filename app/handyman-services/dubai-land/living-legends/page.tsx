import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-land/living-legends'] || {
  title: 'Handyman Services in Living Legends, Dubai Land - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Living Legends, Dubai Land. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiLandLivingLegendsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-land"
      areaName="Dubai Land"
      subArea="living-legends"
      subAreaName="Living Legends"
    />
  );
}