"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, 
  Home as HomeIcon, CheckCircle, Users, Headphones,
  Instagram, Facebook, Twitter, Linkedin, Globe,
  ArrowRight, Star, Calendar, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ContactPageContent from '@/components/contact-page-content';

export const metadata: Metadata = siteMetadata['/contact'];

export default function ContactPage() {
  return <ContactPageContent />;
}
