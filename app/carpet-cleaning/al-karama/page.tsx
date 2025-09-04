import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-karama'] || {
  title: 'Carpet Cleaning in Al Karama - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}