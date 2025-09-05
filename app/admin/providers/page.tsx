"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Search, Filter, Plus, MoreHorizontal, Star, 
  CheckCircle, XCircle, Clock, Eye, Edit, Trash2,
  Phone, Mail, MapPin, Calendar, Award, AlertTriangle,
  UserCheck, UserX, User, TrendingUp, DollarSign, X
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Link from 'next/link';

type Provider = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  experience: number;
  profileimage?: string;
  services: string[];
  areas: string[];
  description: string;
  certifications: string[];
  languages: string[];
  pricing: Record<string, number>;
  availability: { emergency: boolean; weekdays: string; weekends: string };
  isapproved: boolean;
  status: 'pending' | 'active' | 'suspended';
  joineddate: string;
  rating?: number;
  reviewcount?: number;
  totalleads?: number;
  completionrate?: number;
  monthlyrevenue?: number;
  lastactive?: string;
};

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [allProviders, setAllProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [providerToDelete, setProviderToDelete] = useState<Provider | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/admin/providers', { cache: 'no-store' });
        if (!res.ok) return;
        const apiProviders = await res.json();
        if (Array.isArray(apiProviders)) {
          setAllProviders(apiProviders);
        }
      } catch (error) {
        console.error('Error loading providers:', error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredProviders = allProviders.filter(provider => {
    const matchesSearch = provider.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || provider.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'suspended': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'pending': return Clock;
      case 'suspended': return XCircle;
      default: return User;
    }
  };

  const stats = [
    {
      title: 'Total Providers',
      value: allProviders.length.toString(),
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active',
      value: allProviders.filter(p => p.status === 'active').length.toString(),
      icon: UserCheck,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Pending Approval',
      value: allProviders.filter(p => p.status === 'pending').length.toString(),
      icon: Clock,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Suspended',
      value: allProviders.filter(p => p.status === 'suspended').length.toString(),
      icon: UserX,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const handleApproveProvider = async (providerId: string) => {
    try {
      console.log('Approving provider:', providerId);
      
      const response = await fetch('/api/admin/providers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId, action: 'approve' })
      });
      
      console.log('Approval response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Approval result:', result);
        alert('Provider approved successfully!');
        
        // Reload providers from Supabase
        console.log('Reloading providers...');
        const res = await fetch('/api/admin/providers', { cache: 'no-store' });
        if (res.ok) {
          const apiProviders = await res.json();
          console.log('Reloaded providers:', apiProviders);
          if (Array.isArray(apiProviders)) {
            setAllProviders(apiProviders);
          }
        } else {
          console.error('Failed to reload providers');
        }
      } else {
        const errorData = await response.json();
        console.error('Approval failed:', errorData);
        alert(`Failed to approve provider: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error approving provider:', error);
      alert('Failed to approve provider. Please try again.');
    }
  };

  const handleSuspendProvider = async (providerId: string) => {
    try {
      const response = await fetch('/api/admin/providers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId, action: 'suspend' })
      });
      
      if (response.ok) {
        alert('Provider suspended successfully!');
        // Reload providers from Supabase
        const res = await fetch('/api/admin/providers', { cache: 'no-store' });
        if (res.ok) {
          const apiProviders = await res.json();
          if (Array.isArray(apiProviders)) {
            setAllProviders(apiProviders);
          }
        }
      } else {
        const errorData = await response.json();
        alert(`Failed to suspend provider: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error suspending provider:', error);
      alert('Failed to suspend provider. Please try again.');
    }
  };

  const handleDeleteClick = (provider: Provider) => {
    setProviderToDelete(provider);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!providerToDelete) return;
    
    try {
      const response = await fetch('/api/admin/providers', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId: providerToDelete.id })
      });
      if (response.ok) {
        alert('Provider deleted successfully!');
        setDeleteDialogOpen(false);
        setProviderToDelete(null);
        // Reload providers from Supabase
        const res = await fetch('/api/admin/providers', { cache: 'no-store' });
        if (res.ok) {
          const apiProviders = await res.json();
          if (Array.isArray(apiProviders)) {
            setAllProviders(apiProviders);
          }
        }
      } else {
        const errorData = await response.json();
        alert(`Failed to delete provider: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting provider:', error);
      alert('Failed to delete provider. Please try again.');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Provider Management</h1>
          <p className="text-white/60 mt-2">Manage all service providers on your platform</p>
        </div>
        <Link href="/admin/providers/add">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Provider
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
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

      {/* Filters and Search */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input
                placeholder="Search providers by name, company, or email..."
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
                <SelectItem value="active" className="text-white">Active</SelectItem>
                <SelectItem value="pending" className="text-white">Pending</SelectItem>
                <SelectItem value="suspended" className="text-white">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Filter by Service" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Services</SelectItem>
                <SelectItem value="ac-repair" className="text-white">AC Repair</SelectItem>
                <SelectItem value="cleaning" className="text-white">Cleaning</SelectItem>
                <SelectItem value="pest-control" className="text-white">Pest Control</SelectItem>
                <SelectItem value="electrical" className="text-white">Electrical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Providers Table */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardHeader>
          <CardTitle className="text-white">All Providers ({filteredProviders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white/60">Loading providers...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProviders.map((provider, index) => {
                const StatusIcon = getStatusIcon(provider.status);
                return (
                  <motion.div
                    key={provider.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="relative">
                          <img
                            src={provider.profileimage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'}
                            alt={provider.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                          />
                          <div className="absolute -bottom-1 -right-1">
                            <StatusIcon className={`h-5 w-5 ${
                              provider.status === 'active' ? 'text-green-400' :
                              provider.status === 'pending' ? 'text-yellow-400' : 'text-red-400'
                            }`} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                            <Badge className={getStatusColor(provider.status)}>
                              {provider.status}
                            </Badge>
                            {provider.availability?.emergency && (
                              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                                Emergency
                              </Badge>
                            )}
                          </div>
                          {provider.company && (
                            <p className="text-blue-400 font-medium mb-2">{provider.company}</p>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center space-x-2 text-white/70">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span>{provider.rating || 0} ({provider.reviewcount || 0} reviews)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white/70">
                              <Award className="h-4 w-4 text-purple-400" />
                              <span>{provider.experience} years experience</span>
                            </div>
                            {typeof provider.totalleads !== 'undefined' && (
                              <div className="flex items-center space-x-2 text-white/70">
                                <TrendingUp className="h-4 w-4 text-green-400" />
                                <span>{provider.totalleads} total leads</span>
                              </div>
                            )}
                            {typeof provider.monthlyrevenue !== 'undefined' && (
                              <div className="flex items-center space-x-2 text-white/70">
                                <DollarSign className="h-4 w-4 text-green-400" />
                                <span>AED {Number(provider.monthlyrevenue).toLocaleString()}/mo</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-white/60">
                            <div className="flex items-center space-x-1">
                              <Mail className="h-4 w-4" />
                              <span>{provider.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>{provider.phone}</span>
                            </div>
                            {provider.lastactive && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>Last active: {provider.lastactive}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/providers/${provider.id}`}>
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        {provider.status === 'pending' && (
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white" onClick={() => handleApproveProvider(provider.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                        )}
                        {provider.status === 'suspended' && (
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => handleApproveProvider(provider.id)}>
                            <UserCheck className="h-4 w-4 mr-1" />
                            Activate
                          </Button>
                        )}
                        {provider.status === 'active' && (
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => handleSuspendProvider(provider.id)}>
                            <X className="h-4 w-4 mr-1" />
                            Suspend
                          </Button>
                        )}
                        <Button variant="outline" size="icon" className="text-red-400 border-red-400/20 hover:bg-red-400/10" onClick={() => handleDeleteClick(provider)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-white/50 text-xs mb-1">Services Offered</p>
                          <div className="flex flex-wrap gap-1">
                            {provider.services?.slice(0, 3).map(serviceId => (
                              <Badge key={serviceId} variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                                {serviceId.replace('-', ' ')}
                              </Badge>
                            ))}
                            {provider.services && provider.services.length > 3 && (
                              <Badge variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                                +{provider.services.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-white/50 text-xs mb-1">Service Areas</p>
                          <div className="flex flex-wrap gap-1">
                            {provider.areas?.slice(0, 2).map(areaId => (
                              <Badge key={areaId} variant="secondary" className="bg-blue-500/20 text-blue-400 border-0 text-xs">
                                {areaId.replace('-', ' ')}
                              </Badge>
                            ))}
                            {provider.areas && provider.areas.length > 2 && (
                              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-0 text-xs">
                                +{provider.areas.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-white/50 text-xs mb-1">Performance</p>
                          <div className="flex items-center space-x-3 text-xs">
                            {typeof provider.completionrate !== 'undefined' && (
                              <span className="text-green-400">{provider.completionrate}% completion</span>
                            )}
                            {provider.joineddate && (
                              <>
                                <span className="text-white/60">•</span>
                                <span className="text-white/60">Joined {new Date(provider.joineddate).toLocaleDateString()}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
          {!loading && filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No providers found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-neutral-900 border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white">Delete Provider</DialogTitle>
            <DialogDescription className="text-white/60">
              Are you sure you want to delete <strong>{providerToDelete?.name}</strong>? This action cannot be undone and will permanently remove the provider from the database.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setDeleteDialogOpen(false)}
              className="text-white border-white/20 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleDeleteConfirm}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Delete Provider
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}