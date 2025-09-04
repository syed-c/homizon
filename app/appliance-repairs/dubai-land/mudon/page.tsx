import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-land/mudon'] || {
  title: 'Appliance Repairs in Mudon - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mudon. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMudonPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="mudon"
      subareaName="Mudon"
    />
  );
}