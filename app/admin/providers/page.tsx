

"use client";

import { useState } from 'react';
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
import Link from 'next/link';
import { sampleProviders, Provider } from '@/lib/data';

const seededProviders: (Provider & { 
  status: 'active' | 'pending' | 'suspended';
  totalLeads: number;
  completionRate: number;
  monthlyRevenue: number;
  lastActive: string;
})[] = [];

if (sampleProviders[0]) {
  seededProviders.push({
    ...sampleProviders[0],
    status: 'active',
    totalLeads: 156,
    completionRate: 95,
    monthlyRevenue: 8450,
    lastActive: '2 hours ago'
  });
}

const allProviders: (Provider & { 
  status: 'active' | 'pending' | 'suspended';
  totalLeads: number;
  completionRate: number;
  monthlyRevenue: number;
  lastActive: string;
})[] = [
  ...seededProviders,
  {
    id: 'provider-4',
    name: 'Rajesh Kumar',
    company: 'Dubai Tech Repairs',
    email: 'rajesh@dubaitech.ae',
    phone: '+971504567890',
    profileImage: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    experience: 5,
    rating: 4.6,
    reviewCount: 67,
    services: ['electrical-work', 'wall-mounting'],
    areas: ['al-barsha', 'palm-jumeirah'],
    description: 'Experienced electrical technician specializing in home automation and installations.',
    certifications: ['Licensed Electrician', 'Home Automation Certified'],
    languages: ['English', 'Hindi', 'Malayalam'],
    pricing: {
      'electrical-work': { basePrice: 120, currency: 'AED' }
    },
    availability: {
      emergency: false,
      weekdays: '8:00 AM - 6:00 PM',
      weekends: '9:00 AM - 4:00 PM'
    },
    isApproved: false,
    isFeatured: false,
    isPremium: false,
    joinedDate: '2024-01-20',
    completedJobs: 0,
    responseTime: 'Within 2 hours',
    portfolioImages: [],
    status: 'pending',
    totalLeads: 0,
    completionRate: 0,
    monthlyRevenue: 0,
    lastActive: 'Never'
  },
  {
    id: 'provider-5',
    name: 'Sarah Johnson',
    company: 'Elite Pest Solutions',
    email: 'sarah@elitepest.ae',
    phone: '+971505678901',
    profileImage: 'https://images.pexels.com/photos/7690076/pexels-photo-7690076.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    experience: 3,
    rating: 4.2,
    reviewCount: 45,
    services: ['general-pest-control', 'bed-bug-control'],
    areas: ['downtown-dubai', 'difc'],
    description: 'Professional pest control specialist with eco-friendly solutions.',
    certifications: ['Pest Control License', 'Safety Certified'],
    languages: ['English', 'Arabic'],
    pricing: {
      'general-pest-control': { basePrice: 250, currency: 'AED' }
    },
    availability: {
      emergency: true,
      weekdays: '7:00 AM - 7:00 PM',
      weekends: '8:00 AM - 5:00 PM'
    },
    isApproved: true,
    isFeatured: false,
    isPremium: false,
    joinedDate: '2023-11-15',
    completedJobs: 0,
    responseTime: 'Within 4 hours',
    portfolioImages: [],
    status: 'suspended',
    totalLeads: 34,
    completionRate: 78,
    monthlyRevenue: 2100,
    lastActive: '2 weeks ago'
  }
];

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [providers, setProviders] = useState(allProviders);

  const filteredProviders = providers.filter(provider => {
    const normalizedSearch = (searchTerm ?? '').toLowerCase();
    const name = (provider.name ?? '').toLowerCase();
    const company = (provider.company ?? '').toLowerCase();
    const email = (provider.email ?? '').toLowerCase();

    const matchesSearch = name.includes(normalizedSearch) ||
                         company.includes(normalizedSearch) ||
                         email.includes(normalizedSearch);
    
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
      value: providers.length.toString(),
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active',
      value: providers.filter(p => p.status === 'active').length.toString(),
      icon: UserCheck,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Pending Approval',
      value: providers.filter(p => p.status === 'pending').length.toString(),
      icon: Clock,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Suspended',
      value: providers.filter(p => p.status === 'suspended').length.toString(),
      icon: UserX,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const handleApproveProvider = async (providerId: string) => {
    try {
      const response = await fetch('/api/admin/providers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId, action: 'approve' })
      });

      if (response.ok) {
        // Update local state
        setProviders(prev => 
          prev.map(p => 
            p.id === providerId 
              ? { ...p, status: 'active', isApproved: true }
              : p
          )
        );
        alert('Provider approved successfully!');
      }
    } catch (error) {
      console.error('Error approving provider:', error);
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
        // Update local state
        setProviders(prev => 
          prev.map(p => 
            p.id === providerId 
              ? { ...p, status: 'suspended', isApproved: false }
              : p
          )
        );
        alert('Provider suspended successfully!');
      }
    } catch (error) {
      console.error('Error suspending provider:', error);
    }
  };

  const handleDeleteProvider = async (providerId: string) => {
    if (confirm('Are you sure you want to delete this provider? This action cannot be undone.')) {
      try {
        const response = await fetch('/api/admin/providers', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ providerId })
        });

        if (response.ok) {
          // Update local state
          setProviders(prev => prev.filter(p => p.id !== providerId));
          alert('Provider deleted successfully!');
        }
      } catch (error) {
        console.error('Error deleting provider:', error);
      }
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
                      {/* Profile Image */}
                      <div className="relative">
                        <img
                          src={provider.profileImage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'}
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

                      {/* Provider Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                          <Badge className={getStatusColor(provider.status)}>
                            {provider.status}
                          </Badge>
                          {provider.availability.emergency && (
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
                            <span>{provider.rating} ({provider.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/70">
                            <Award className="h-4 w-4 text-purple-400" />
                            <span>{provider.experience} years experience</span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/70">
                            <TrendingUp className="h-4 w-4 text-green-400" />
                            <span>{provider.totalLeads} total leads</span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/70">
                            <DollarSign className="h-4 w-4 text-green-400" />
                            <span>AED {provider.monthlyRevenue.toLocaleString()}/mo</span>
                          </div>
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
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Last active: {provider.lastActive}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      {provider.status === 'pending' && (
                        <Button 
                          size="sm" 
                          className="bg-green-500 hover:bg-green-600 text-white"
                          onClick={() => handleApproveProvider(provider.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      )}
                      {provider.status === 'suspended' && (
                        <Button 
                          size="sm" 
                          className="bg-blue-500 hover:bg-blue-600 text-white"
                          onClick={() => handleApproveProvider(provider.id)}
                        >
                          <UserCheck className="h-4 w-4 mr-1" />
                          Activate
                        </Button>
                      )}
                      {provider.status === 'active' && (
                        <Button 
                          size="sm" 
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                          onClick={() => handleSuspendProvider(provider.id)}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Suspend
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="text-red-400 border-red-400/20 hover:bg-red-400/10"
                        onClick={() => handleDeleteProvider(provider.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-white/50 text-xs mb-1">Services Offered</p>
                        <div className="flex flex-wrap gap-1">
                          {provider.services.slice(0, 3).map(serviceId => (
                            <Badge key={serviceId} variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                              {serviceId.replace('-', ' ')}
                            </Badge>
                          ))}
                          {provider.services.length > 3 && (
                            <Badge variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                              +{provider.services.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs mb-1">Service Areas</p>
                        <div className="flex flex-wrap gap-1">
                          {provider.areas.slice(0, 2).map(areaId => (
                            <Badge key={areaId} variant="secondary" className="bg-blue-500/20 text-blue-400 border-0 text-xs">
                              {areaId.replace('-', ' ')}
                            </Badge>
                          ))}
                          {provider.areas.length > 2 && (
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-0 text-xs">
                              +{provider.areas.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs mb-1">Performance</p>
                        <div className="flex items-center space-x-3 text-xs">
                          <span className="text-green-400">{provider.completionRate}% completion</span>
                          <span className="text-white/60">•</span>
                          <span className="text-white/60">Joined {new Date(provider.joinedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No providers found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

