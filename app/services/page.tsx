"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Clock, Shield, Award, Users, Phone, 
  ArrowRight, CheckCircle, Eye, Wind, Settings, Sparkles, 
  Bug, Wrench, Zap, Hammer, Shirt, Truck, MapPin, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { serviceCategories, services, areas, getProvidersByCategory } from '@/lib/data';
import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServicesPageContent from '@/components/services-page-content';

export const metadata: Metadata = siteMetadata['/services'];

export default function ServicesPage() {
  return <ServicesPageContent />;
}
