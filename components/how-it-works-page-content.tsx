"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { getPageContentFromSupabase } from '@/lib/supabase';

export default function HowItWorksPageContent() {
  const [cms, setCms] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getPageContentFromSupabase('how-it-works');
        setCms((res as any)?.data?.content || null);
      } catch {}
    })();
  }, []);

  const steps: any[] = Array.isArray(cms?.steps?.items) ? cms.steps.items : [];
  const features: any[] = Array.isArray(cms?.why?.items) ? cms.why.items : [];
  const faqs: any[] = Array.isArray(cms?.faqs?.items) ? cms.faqs.items : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                {cms?.hero?.h1 || 'How ServiceDubai Works for You'}
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              {cms?.hero?.paragraph || 'Getting professional home services has never been easier. Follow our simple 4-step process to connect with verified experts and get your home maintenance done right.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Start Booking Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 XXX XXXX
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps */}
        {(cms?.steps?.h2 || cms?.steps?.paragraph || steps.length) && (
          <section className="py-20">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4 text-white">{cms?.steps?.h2 || 'Simple 4-Step Process'}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{cms?.steps?.paragraph || "From booking to completion, we've streamlined the entire process to save you time and effort."}</p>
            </motion.div>
            <div className="space-y-20">
              {steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.15 }} viewport={{ once: true }} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold text-white">{step.h3}</h3>
                    <p className="text-white/70 text-lg leading-relaxed">{step.paragraph}</p>
                    <div className="space-y-3">
                      {(step.bullets || []).map((b: string, i: number) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent-400" />
                          <span className="text-white/80">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    {step.image_url && (
                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src={step.image_url} alt={step.h3} className="w-full h-80 object-cover" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Why Choose */}
        {(cms?.why?.h2 || cms?.why?.paragraph || features.length) && (
          <section className="py-20 bg-white/5 rounded-3xl">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4 text-white">{cms?.why?.h2 || 'Why Choose ServiceDubai?'}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{cms?.why?.paragraph || "We've built our platform with your needs in mind, ensuring the best possible experience."}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="group">
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{f.h3}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{f.paragraph}</p>
                      {f.image_url && <img src={f.image_url} alt={f.h3} className="w-full h-40 object-cover rounded-lg" />}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {(cms?.faqs?.h2 || cms?.faqs?.paragraph || faqs.length) && (
          <section className="py-20">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4 text-white">{cms?.faqs?.h2 || 'Frequently Asked Questions'}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{cms?.faqs?.paragraph || "Got questions? We've got answers to help you get started."}</p>
            </motion.div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                    <CardContent className="p-6">
                      <h4 className="text-white font-semibold text-lg mb-3">{faq.question}</h4>
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        {cms?.cta?.h2 && (
          <section className="py-20 text-center">
            <motion.div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl p-12 border border-white/10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-4">{cms.cta.h2}</h2>
              {cms?.cta?.paragraph && <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{cms.cta.paragraph}</p>}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
                    {cms?.cta?.primary || 'Book Your First Service'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}


