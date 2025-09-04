"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Phone, MessageSquare, Clock, Star, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              ServiceDubai
            </span>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                Request Submitted!
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-6">
              Thank you for choosing ServiceDubai. We've received your service request and are connecting you with verified professionals.
            </p>
            <div className="text-lg text-white/60">
              Request ID: <span className="font-mono text-neon-green">#{Date.now().toString().slice(-6)}</span>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">What happens next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Instant Confirmation</h3>
                  <p className="text-white/60 text-sm">
                    You'll receive SMS confirmation within 2 minutes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Provider Contact</h3>
                  <p className="text-white/60 text-sm">
                    Verified professionals will contact you within 30 minutes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Service Complete</h3>
                  <p className="text-white/60 text-sm">
                    Choose your preferred provider and get the job done
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-amber-500/10 border border-amber-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-amber-300 mb-2">Important Information</h4>
                    <ul className="text-amber-200/80 text-sm space-y-1">
                      <li>• Keep your phone nearby - providers will call you directly</li>
                      <li>• Compare quotes from multiple providers before choosing</li>
                      <li>• Payment is made after service completion</li>
                      <li>• All providers are verified and insured</li>
                      <li>• Emergency services available 24/7</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green/80 hover:to-neon-blue/80 text-black font-medium px-8"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            </Link>
            
            <Link href="/how-it-works">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/20 hover:bg-white/10 px-8"
              >
                How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/60 text-sm mb-4">
              Need help or have questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971501234567" className="flex items-center space-x-2 text-neon-green hover:text-neon-blue transition-colors">
                <Phone className="w-4 h-4" />
                <span>+971 50 XXX XXXX</span>
              </a>
              <a href="https://wa.me/971501234567" className="flex items-center space-x-2 text-neon-green hover:text-neon-blue transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}