'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { 
  Users, Phone, Mail, MapPin, Clock, Calendar, 
  User, RefreshCw, Search, UserCheck, MessageSquare,
  AlertTriangle, CheckCircle, Activity
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceCategory: string;
  subServices: string[];
  area: string;
  subArea: string;
  address: string;
  description: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  status: 'new' | 'contacted' | 'assigned' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
  source: string;
  whatsapp: boolean;
  assignedProviders: string[];
  responses: number;
}

type SimpleProvider = { id: string; name: string };

export default function LeadsManagement() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [error, setError] = useState('');
  const [providers, setProviders] = useState<SimpleProvider[]>([]);

  const loadLeads = async () => {
    try {
      setLoading(true);
      setError('');

      // Prefer our API which now pulls from Supabase
      const response = await fetch('/api/leads?_t=' + Date.now(), { method: 'GET' });
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      if (Array.isArray(data.leads)) {
        setLeads(data.leads);
        return;
      }
      throw new Error('Bad shape');
    } catch (err) {
      // Fallback to direct Supabase fetch
      try {
        const { listLeadsFromSupabase } = await import('@/lib/supabase');
        const { data } = await listLeadsFromSupabase();
        const mapped = (data as any[]).map(l => ({
          id: l.id,
          name: l.name,
          phone: l.phone,
          email: l.email || '',
          serviceCategory: l.servicecategory,
          subServices: l.subservices || [],
          area: l.area,
          subArea: l.subarea || '',
          address: l.address || '',
          description: l.description || '',
          urgency: (l.urgency || 'normal') as any,
          status: (l.status || 'new') as any,
          createdAt: l.createdat || new Date().toISOString(),
          updatedAt: l.updatedat || l.createdat || new Date().toISOString(),
          source: l.source || 'supabase',
          whatsapp: !!l.whatsapp,
          assignedProviders: l.providerid ? [l.providerid] : [],
          responses: 0,
        }));
        setLeads(mapped);
      } catch (e) {
        setError('Failed to fetch leads');
      }
    } finally {
      setLoading(false);
    }
  };

  const loadProviders = async () => {
    try {
      const { listProvidersFromSupabase } = await import('@/lib/supabase');
      const { data } = await listProvidersFromSupabase();
      const mapped = (data as any[]).map(p => ({ id: p.id, name: p.name }));
      setProviders(mapped);
    } catch {
      setProviders([]);
    }
  };

  const assignProvider = async (leadId: string, providerId: string) => {
    try {
      // Update both shared admin leads and main leads endpoint for consistency
      const response = await fetch('/api/admin/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, providerId, action: 'assign' })
      });
      const response2 = await fetch('/api/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, providerId, action: 'assign_provider' })
      });
      if (response.ok && response2.ok) {
        toast({ title: 'Provider Assigned', description: 'Lead has been assigned to the provider successfully' });
        loadLeads();
      }
    } catch {}
  };

  useEffect(() => { loadLeads(); loadProviders(); }, []);

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = !searchTerm || 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'assigned': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'in_progress': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'urgent': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'normal': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading leads data...</p>
          <p className="text-white/60 text-sm">Fetching customer inquiries from database</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Lead Management</h1>
          <p className="text-white/60 mt-2">
            Manage customer inquiries and assign providers ({leads.length} total leads)
          </p>
        </div>
        <Button 
          variant="outline" 
          className="text-white border-white/20 hover:bg-white/10"
          onClick={loadLeads}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh ({leads.length})
        </Button>
      </div>

      {error && (
        <Card className="bg-red-500/10 border-red-500/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-red-400">
              <AlertTriangle className="h-5 w-5" />
              <span>Error: {error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Total Leads</p>
                <p className="text-2xl font-bold text-white">{leads.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">New Leads</p>
                <p className="text-2xl font-bold text-white">{leads.filter(l => l.status === 'new').length}</p>
              </div>
              <Clock className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Assigned</p>
                <p className="text-2xl font-bold text-white">{leads.filter(l => l.status === 'assigned').length}</p>
              </div>
              <UserCheck className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Completed</p>
                <p className="text-2xl font-bold text-white">{leads.filter(l => l.status === 'completed').length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-white/60 text-sm flex items-center">
              Showing {filteredLeads.length} of {leads.length} leads
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <div className="space-y-4">
        {filteredLeads.map((lead) => (
          <Card key={lead.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                    </div>
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status.replace('_', ' ')}
                    </Badge>
                    <Badge className={getUrgencyColor(lead.urgency)}>
                      {lead.urgency}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-white/70">
                      <Phone className="h-4 w-4" />
                      <span>{lead.phone}</span>
                      {lead.whatsapp && (
                        <MessageSquare className="h-4 w-4 text-green-400" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <Mail className="h-4 w-4" />
                      <span>{lead.email || 'No email'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <MapPin className="h-4 w-4" />
                      <span>{lead.area}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-white font-medium">{lead.serviceCategory}</p>
                    <p className="text-white/60 text-sm">{lead.description}</p>
                    <p className="text-white/50 text-xs mt-1">{lead.address}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-white/50">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(lead.createdAt)}</span>
                    </div>
                    <span>Source: {lead.source}</span>
                    <span>ID: {lead.id.split('_')[1]}</span>
                  </div>
                </div>

                <div className="ml-6 flex flex-col space-y-2">
                  {lead.status === 'new' || lead.status === 'contacted' ? (
                    <Select onValueChange={(providerId) => assignProvider(lead.id, providerId)}>
                      <SelectTrigger className="w-[200px] bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Assign Provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {providers.map((provider) => (
                          <SelectItem key={provider.id} value={provider.id}>
                            {provider.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="flex items-center space-x-2 text-green-400">
                      <UserCheck className="h-4 w-4" />
                      <span className="text-sm">
                        {lead.status === 'assigned' ? 'Assigned' : 
                         lead.status === 'completed' ? 'Completed' : 
                         lead.status === 'in_progress' ? 'In Progress' : 'Processed'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLeads.length === 0 && !loading && (
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-12 text-center">
            <Users className="h-16 w-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No leads found</h3>
            <p className="text-white/60 mb-4">
              {searchTerm || statusFilter !== 'all'
                ? 'Try adjusting your search or filter criteria'
                : 'No customer inquiries have been received yet'}
            </p>
            <Button onClick={loadLeads} className="bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Leads
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}