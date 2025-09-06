"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, CheckCircle, Clock, Star, TrendingUp, 
  DollarSign, Calendar, Phone, Mail, MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getProviderLeadsFromSupabase } from '@/lib/supabase';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  servicecategory: string;
  area: string;
  description?: string;
  urgency?: string;
  status: string;
  createdat: string;
  providerid?: string;
  providername?: string;
}

interface Provider {
  id: string;
  name: string;
  email: string;
  profileimage?: string;
  status: string;
}

export default function ProviderDashboard() {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedProvider = localStorage.getItem('provider');
    if (storedProvider) {
      const providerData = JSON.parse(storedProvider);
      setProvider(providerData);
      loadLeads(providerData.id);
    } else {
      setLoading(false);
    }
  }, []);

  const loadLeads = async (providerId: string) => {
    try {
      const response = await fetch(`/api/providers/${providerId}/leads`);
      if (response.ok) {
        const data = await response.json();
        setLeads(data || []);
      } else {
        console.error('Failed to fetch leads:', response.status);
        setLeads([]);
      }
    } catch (error) {
      console.error('Error loading leads:', error);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const completedLeads = leads.filter(lead => lead.status === 'completed').length;
  const incompleteLeads = leads.filter(lead => lead.status === 'incomplete' || lead.status === 'new').length;
  const totalLeads = leads.length;
  const averageRating = 4.8;

  const stats = [
    { title: 'Total Leads', value: totalLeads.toString(), icon: Users, color: 'from-blue-500 to-cyan-500', change: '+12%' },
    { title: 'Completed', value: completedLeads.toString(), icon: CheckCircle, color: 'from-green-500 to-emerald-500', change: '+8%' },
    { title: 'Incomplete', value: incompleteLeads.toString(), icon: Clock, color: 'from-orange-500 to-red-500', change: '+4%' },
    { title: 'Avg Rating', value: averageRating.toString(), icon: Star, color: 'from-yellow-500 to-orange-500', change: '+0.2' }
  ];

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'urgent': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'normal': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'incomplete': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-white/60 mb-6">Please log in to access your dashboard</p>
          <a href="/login" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-6 py-3 rounded-lg">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900">
      <div className="p-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-white/60 mt-2">Overview of your service provider performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/60 text-sm font-medium">{stat.title}</p>
                        <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                        <p className="text-green-400 text-xs mt-1">{stat.change} from last month</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Current Work (Incomplete Leads)</CardTitle>
            </CardHeader>
            <CardContent>
              {incompleteLeads > 0 ? (
                <div className="space-y-4">
                  {leads.filter(lead => lead.status === 'incomplete' || lead.status === 'new').slice(0, 5).map((lead, index) => (
                    <motion.div key={lead.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                            <span className="text-black font-semibold text-sm">{lead.name.charAt(0).toUpperCase()}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                              <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
                              {lead.urgency && (<Badge className={getUrgencyColor(lead.urgency)}>{lead.urgency}</Badge>)}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                              <div className="flex items-center space-x-2 text-white/70"><Phone className="h-4 w-4" /><span>{lead.phone}</span></div>
                              {lead.email && (<div className="flex items-center space-x-2 text-white/70"><Mail className="h-4 w-4" /><span>{lead.email}</span></div>)}
                              <div className="flex items-center space-x-2 text-white/70"><MapPin className="h-4 w-4" /><span>{lead.area}</span></div>
                              <div className="flex items-center space-x-2 text-white/70"><Calendar className="h-4 w-4" /><span>{new Date(lead.createdat).toLocaleDateString()}</span></div>
                            </div>
                            <div className="mb-4">
                              <p className="text-white/80 font-medium mb-1">{lead.servicecategory}</p>
                              {lead.description && (<p className="text-white/60 text-sm">{lead.description}</p>)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white"><CheckCircle className="h-4 w-4 mr-1" />Mark Complete</Button>
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10"><Phone className="h-4 w-4 mr-1" />Call</Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 text-white/30 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No incomplete leads</h3>
                  <p className="text-white/60">All your current work is completed. Great job!</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black h-12"><TrendingUp className="h-5 w-5 mr-2" />View Analytics</Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 h-12"><Users className="h-5 w-5 mr-2" />Update Profile</Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 h-12"><DollarSign className="h-5 w-5 mr-2" />Update Pricing</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
