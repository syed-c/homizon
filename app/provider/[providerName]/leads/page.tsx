"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Phone, Mail, MapPin, Calendar, 
  Clock, CheckCircle, AlertTriangle, Search, Filter,
  Eye, Star, User, Building
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getProviderLeadsFromSupabase } from '@/lib/supabase';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  servicecategory: string;
  area: string;
  subarea?: string;
  address?: string;
  description?: string;
  urgency?: string;
  status: string;
  source?: string;
  providerid?: string;
  providername?: string;
  preferredtime?: string;
  whatsapp?: boolean;
  createdat: string;
  updatedat?: string;
}

interface Provider {
  id: string;
  name: string;
  email: string;
  profileimage?: string;
  status: string;
}

export default function ProviderLeads() {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');

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

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.servicecategory?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.area?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesUrgency = urgencyFilter === 'all' || lead.urgency === urgencyFilter;
    return matchesSearch && matchesStatus && matchesUrgency;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'incomplete': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'urgent': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'normal': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'incomplete': return Clock;
      case 'new': return MessageSquare;
      case 'cancelled': return AlertTriangle;
      default: return MessageSquare;
    }
  };

  const handleStatusUpdate = async (leadId: string, newStatus: string) => {
    // In a real app, this would update the lead status in the database
    setLeads(prev => prev.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    ));
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
          <p className="text-white/60 mb-6">Please log in to access your leads</p>
          <a href="/login" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-6 py-3 rounded-lg">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const completedLeads = leads.filter(lead => lead.status === 'completed').length;
  const incompleteLeads = leads.filter(lead => lead.status === 'incomplete' || lead.status === 'new').length;
  const totalLeads = leads.length;

  return (
    <div className="h-full bg-gray-900">
      <div className="p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white">Lead Management</h1>
            <p className="text-white/60 mt-2">Manage all your service requests and customer leads</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm font-medium">Total Leads</p>
                      <p className="text-2xl font-bold text-white mt-2">{totalLeads}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm font-medium">Completed</p>
                      <p className="text-2xl font-bold text-white mt-2">{completedLeads}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm font-medium">Incomplete</p>
                      <p className="text-2xl font-bold text-white mt-2">{incompleteLeads}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Filters */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    placeholder="Search leads by name, phone, email, or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Status</SelectItem>
                    <SelectItem value="new" className="text-white">New</SelectItem>
                    <SelectItem value="incomplete" className="text-white">Incomplete</SelectItem>
                    <SelectItem value="completed" className="text-white">Completed</SelectItem>
                    <SelectItem value="cancelled" className="text-white">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                  <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Urgency" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Urgency</SelectItem>
                    <SelectItem value="emergency" className="text-white">Emergency</SelectItem>
                    <SelectItem value="urgent" className="text-white">Urgent</SelectItem>
                    <SelectItem value="normal" className="text-white">Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Leads List */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">All Leads ({filteredLeads.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredLeads.map((lead, index) => {
                  const StatusIcon = getStatusIcon(lead.status);
                  return (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {lead.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="absolute -bottom-1 -right-1">
                              <StatusIcon className={`h-5 w-5 ${
                                lead.status === 'completed' ? 'text-green-400' :
                                lead.status === 'incomplete' ? 'text-orange-400' :
                                lead.status === 'new' ? 'text-blue-400' : 'text-red-400'
                              }`} />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                              <Badge className={getStatusColor(lead.status)}>
                                {lead.status}
                              </Badge>
                              {lead.urgency && (
                                <Badge className={getUrgencyColor(lead.urgency)}>
                                  {lead.urgency}
                                </Badge>
                              )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                              <div className="flex items-center space-x-2 text-white/70">
                                <Phone className="h-4 w-4" />
                                <span>{lead.phone}</span>
                              </div>
                              {lead.email && (
                                <div className="flex items-center space-x-2 text-white/70">
                                  <Mail className="h-4 w-4" />
                                  <span>{lead.email}</span>
                                </div>
                              )}
                              <div className="flex items-center space-x-2 text-white/70">
                                <MapPin className="h-4 w-4" />
                                <span>{lead.area}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-white/70">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(lead.createdat).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="mb-4">
                              <p className="text-white/80 font-medium mb-1">{lead.servicecategory}</p>
                              {lead.description && (
                                <p className="text-white/60 text-sm">{lead.description}</p>
                              )}
                              {lead.address && (
                                <p className="text-white/60 text-sm mt-1">Address: {lead.address}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {lead.status !== 'completed' && (
                            <Button 
                              size="sm" 
                              className="bg-green-500 hover:bg-green-600 text-white"
                              onClick={() => handleStatusUpdate(lead.id, 'completed')}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Complete
                            </Button>
                          )}
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4 text-white/60">
                            <span>ID: {lead.id}</span>
                            {lead.source && <span>Source: {lead.source}</span>}
                            {lead.preferredtime && <span>Preferred: {lead.preferredtime}</span>}
                          </div>
                          <div className="flex items-center space-x-2">
                            {lead.whatsapp && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                WhatsApp
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {filteredLeads.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-white/30 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No leads found</h3>
                  <p className="text-white/60">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
