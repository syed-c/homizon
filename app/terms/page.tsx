import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - HOMIZON',
  description: 'Terms of Service for HOMIZON - Dubai\'s premier home services platform',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-4xl">
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using HOMIZON, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2>Use License</h2>
          <p>Permission is granted to temporarily download one copy of HOMIZON per device for personal, non-commercial transitory viewing only.</p>
          
          <h2>Service Provider Terms</h2>
          <p>Service providers using our platform agree to provide accurate information, maintain professional standards, and comply with all applicable laws and regulations.</p>
          
          <h2>User Responsibilities</h2>
          <p>Users are responsible for providing accurate information and using our services in accordance with these terms.</p>
          
          <h2>Limitation of Liability</h2>
          <p>In no event shall HOMIZON, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          
          <h2>Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at contact@homizon.com</p>
        </div>
      </div>
    </div>
  );
}
