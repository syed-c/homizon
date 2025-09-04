"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Plus, Edit, Trash2, Star, CheckCircle, 
  XCircle, Crown, Zap, Shield, TrendingUp, Users, 
  DollarSign, Calendar, Settings, Eye, MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'monthly' | 'quarterly' | 'yearly';
  description: string;
  features: string[];
  limits: {
    leadLimit: number;
    featuredListings: number;
    prioritySupport: boolean;
    analyticsAccess: boolean;
  };
  isActive: boolean;
  subscriberCount: number;
  createdAt: string;
  color: string;
}

interface ProviderSubscription {
  id: string;
  providerId: string;
  providerName: string;
  planId: string;
  planName: string;
  status: 'active' | 'cancelled' | 'expired' | 'pending';
  startDate: string;
  endDate: string;
  nextBillingDate: string;
  amount: number;
  currency: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'plan-free',
    name: 'Free',
    price: 0,
    currency: 'AED',
    interval: 'monthly',
    description: 'Perfect for getting started',
    features: ['Basic profile listing', 'Customer inquiries', 'Basic analytics'],
    limits: {
      leadLimit: 10,
      featuredListings: 0,
      prioritySupport: false,
      analyticsAccess: false
    },
    isActive: true,
    subscriberCount: 45,
    createdAt: '2024-01-01T00:00:00Z',
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'plan-standard',
    name: 'Standard',
    price: 99,
    currency: 'AED',
    interval: 'monthly',
    description: 'For growing businesses',
    features: ['Everything in Free', 'Featured listings', 'Priority in search', 'Advanced analytics'],
    limits: {
      leadLimit: 50,
      featuredListings: 3,
      prioritySupport: false,
      analyticsAccess: true
    },
    isActive: true,
    subscriberCount: 28,
    createdAt: '2024-01-01T00:00:00Z',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    price: 199,
    currency: 'AED',
    interval: 'monthly',
    description: 'For established professionals',
    features: ['Everything in Standard', 'Unlimited leads', 'Premium badge', 'Priority support', 'Marketing tools'],
    limits: {
      leadLimit: -1, // Unlimited
      featuredListings: 10,
      prioritySupport: true,
      analyticsAccess: true
    },
    isActive: true,
    subscriberCount: 15,
    createdAt: '2024-01-01T00:00:00Z',
    color: 'from-purple-500 to-purple-600'
  }
];

const providerSubscriptions: ProviderSubscription[] = [
  {
    id: 'sub-001',
    providerId: 'provider-1',
    providerName: 'Ahmed Al-Rashid',
    planId: 'plan-standard',
    planName: 'Standard',
    status: 'active',
    startDate: '2024-12-01T00:00:00Z',
    endDate: '2025-12-01T00:00:00Z',
    nextBillingDate: '2025-02-01T00:00:00Z',
    amount: 99,
    currency: 'AED'
  },
  {
    id: 'sub-002',
    providerId: 'provider-2',
    providerName: 'Sarah Johnson',
    planId: 'plan-premium',
    planName: 'Premium',
    status: 'active',
    startDate: '2024-11-15T00:00:00Z',
    endDate: '2025-11-15T00:00:00Z',
    nextBillingDate: '2025-02-15T00:00:00Z',
    amount: 199,
    currency: 'AED'
  },
  {
    id: 'sub-003',
    providerId: 'provider-3',
    providerName: 'Michael Chen',
    planId: 'plan-free',
    planName: 'Free',
    status: 'active',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2025-01-01T00:00:00Z',
    nextBillingDate: '',
    amount: 0,
    currency: 'AED'
  }
];

export default function SubscriptionsPage() {
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [showEditPlan, setShowEditPlan] = useState<SubscriptionPlan | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const stats = [
    {
      title: 'Total Revenue',
      value: 'AED 12,456',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      change: '+15%'
    },
    {
      title: 'Active Subscribers',
      value: '88',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      change: '+8%'
    },
    {
      title: 'Monthly Recurring Revenue',
      value: 'AED 5,234',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      change: '+12%'
    },
    {
      title: 'Conversion Rate',
      value: '24%',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      change: '+3%'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'expired': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPlanIcon = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'free': return Shield;
      case 'standard': return Star;
      case 'premium': return Crown;
      default: return CreditCard;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Subscription Management</h1>
          <p className="text-white/60 mt-2">Manage subscription plans and provider subscriptions</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          onClick={() => setShowCreatePlan(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Plan
        </Button>
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
                    <p className="text-green-400 text-sm mt-1">{stat.change} vs last month</p>
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

      {/* Subscription Plans */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Subscription Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan, index) => {
            const PlanIcon = getPlanIcon(plan.name);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 ${plan.name === 'Premium' ? 'ring-2 ring-purple-500/30' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center`}>
                          <PlanIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">{plan.name}</CardTitle>
                          <p className="text-white/60 text-sm">{plan.description}</p>
                        </div>
                      </div>
                      <Switch checked={plan.isActive} />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          {plan.price === 0 ? 'Free' : `${plan.currency} ${plan.price}`}
                        </div>
                        {plan.price > 0 && (
                          <div className="text-white/60 text-sm">per {plan.interval}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm text-white/80">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Subscribers</span>
                          <span className="text-white font-medium">{plan.subscriberCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <span className="text-white/60">Lead Limit</span>
                          <span className="text-white font-medium">
                            {plan.limits.leadLimit === -1 ? 'Unlimited' : plan.limits.leadLimit}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 pt-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-white border-white/20 hover:bg-white/10"
                          onClick={() => setShowEditPlan(plan)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-white border-white/20 hover:bg-white/10"
                          onClick={() => setSelectedPlan(plan)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active Subscriptions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Active Subscriptions</h2>
        
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6">
            <div className="space-y-4">
              {providerSubscriptions.map((subscription, index) => (
                <motion.div
                  key={subscription.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {subscription.providerName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{subscription.providerName}</h3>
                        <p className="text-white/60 text-sm">{subscription.planName} Plan</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-white font-medium">
                          {subscription.amount === 0 ? 'Free' : `${subscription.currency} ${subscription.amount}`}
                        </p>
                        {subscription.nextBillingDate && (
                          <p className="text-white/60 text-sm">
                            Next billing: {new Date(subscription.nextBillingDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <Badge className={getStatusColor(subscription.status)}>
                        {subscription.status}
                      </Badge>
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Plan Dialog */}
      <Dialog open={showCreatePlan} onOpenChange={setShowCreatePlan}>
        <DialogContent className="bg-neutral-900 border-white/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Subscription Plan</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Plan Name</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="e.g., Professional" />
              </div>
              <div>
                <Label>Price (AED)</Label>
                <Input className="bg-white/10 border-white/20 text-white" type="number" placeholder="0" />
              </div>
            </div>
            
            <div>
              <Label>Description</Label>
              <Textarea className="bg-white/10 border-white/20 text-white" placeholder="Plan description..." />
            </div>
            
            <div>
              <Label>Features (one per line)</Label>
              <Textarea className="bg-white/10 border-white/20 text-white" placeholder="Basic profile listing
Customer inquiries
Basic analytics" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Lead Limit</Label>
                <Input className="bg-white/10 border-white/20 text-white" type="number" placeholder="10" />
              </div>
              <div>
                <Label>Featured Listings</Label>
                <Input className="bg-white/10 border-white/20 text-white" type="number" placeholder="0" />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3">
              <Button variant="outline" className="text-white border-white/20" onClick={() => setShowCreatePlan(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Create Plan
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}