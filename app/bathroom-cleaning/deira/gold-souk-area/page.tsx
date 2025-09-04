import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/deira/gold-souk-area'] || {
  title: 'Bathroom Deep Cleaning in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}