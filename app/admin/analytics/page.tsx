"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, TrendingDown, Calendar, Download,
  Users, DollarSign, Star, Eye, MapPin, Building, Clock,
  Target, Award, Activity, PieChart, LineChart, Filter,
  ArrowUpRight, ArrowDownRight, RefreshCw, ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface AnalyticsMetric {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: any;
  color: string;
}

interface ServicePerformance {
  service: string;
  leads: number;
  conversions: number;
  revenue: number;
  avgRating: number;
  growth: number;
}

interface AreaPerformance {
  area: string;
  leads: number;
  providers: number;
  revenue: number;
  satisfaction: number;
  growth: number;
}

interface ProviderMetric {
  name: string;
  company: string;
  leads: number;
  completions: number;
  revenue: number;
  rating: number;
  responseTime: string;
}

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d');
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const refreshData = () => {
    setLastUpdated(new Date().toLocaleTimeString());
  };

  // Key Performance Metrics
  const kpis: AnalyticsMetric[] = [
    {
      title: 'Total Revenue',
      value: 'AED 156,840',
      change: '+23.5%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Total Leads',
      value: '2,843',
      change: '+12.8%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Conversion Rate',
      value: '68.4%',
      change: '+5.2%',
      changeType: 'increase',
      icon: Target,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Avg Rating',
      value: '4.8/5',
      change: '+0.3',
      changeType: 'increase',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Active Providers',
      value: '156',
      change: '+8.1%',
      changeType: 'increase',
      icon: Users,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Avg Response Time',
      value: '2.3 hrs',
      change: '-15.2%',
      changeType: 'decrease',
      icon: Clock,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  // Service Performance Data
  const servicePerformance: ServicePerformance[] = [
    {
      service: 'AC Repair & Maintenance',
      leads: 456,
      conversions: 312,
      revenue: 46800,
      avgRating: 4.9,
      growth: 18.5
    },
    {
      service: 'Deep Home Cleaning',
      leads: 398,
      conversions: 276,
      revenue: 35200,
      avgRating: 4.8,
      growth: 22.1
    },
    {
      service: 'Plumbing Services',
      leads: 345,
      conversions: 228,
      revenue: 29400,
      avgRating: 4.7,
      growth: 15.3
    },
    {
      service: 'Electrical Work',
      leads: 287,
      conversions: 195,
      revenue: 24600,
      avgRating: 4.8,
      growth: 12.8
    },
    {
      service: 'Pest Control',
      leads: 234,
      conversions: 156,
      revenue: 20800,
      avgRating: 4.6,
      growth: 8.9
    }
  ];

  // Area Performance Data
  const areaPerformance: AreaPerformance[] = [
    {
      area: 'Dubai Marina',
      leads: 487,
      providers: 34,
      revenue: 58200,
      satisfaction: 4.9,
      growth: 25.3
    },
    {
      area: 'Downtown Dubai',
      leads: 423,
      providers: 29,
      revenue: 51600,
      satisfaction: 4.8,
      growth: 19.7
    },
    {
      area: 'Business Bay',
      leads: 356,
      providers: 25,
      revenue: 42300,
      satisfaction: 4.7,
      growth: 16.4
    },
    {
      area: 'JLT',
      leads: 298,
      providers: 22,
      revenue: 35400,
      satisfaction: 4.8,
      growth: 14.2
    },
    {
      area: 'Al Barsha',
      leads: 267,
      providers: 19,
      revenue: 31200,
      satisfaction: 4.6,
      growth: 11.8
    }
  ];

  // Top Performing Providers
  const topProviders: ProviderMetric[] = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Cool Breeze AC Services',
      leads: 89,
      completions: 84,
      revenue: 12600,
      rating: 4.9,
      responseTime: '1.2 hrs'
    },
    {
      name: 'Fatima Hassan',
      company: 'Sparkle Clean Dubai',
      leads: 76,
      completions: 72,
      revenue: 10800,
      rating: 4.8,
      responseTime: '1.5 hrs'
    },
    {
      name: 'Michael Johnson',
      company: 'Fix-It-All Services',
      leads: 68,
      completions: 61,
      revenue: 9200,
      rating: 4.7,
      responseTime: '2.1 hrs'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-white/60 mt-2">
            Platform performance insights and metrics • Last updated: {lastUpdated}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-white/20">
              <SelectItem value="7d" className="text-white">7 Days</SelectItem>
              <SelectItem value="30d" className="text-white">30 Days</SelectItem>
              <SelectItem value="90d" className="text-white">90 Days</SelectItem>
              <SelectItem value="1y" className="text-white">1 Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={refreshData} className="text-white border-white/20 hover:bg-white/10">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-white/60 text-sm font-medium">{kpi.title}</p>
                    <p className="text-2xl font-bold text-white mt-2">{kpi.value}</p>
                    <div className="flex items-center mt-2">
                      {kpi.changeType === 'increase' ? (
                        <ArrowUpRight className="h-4 w-4 text-green-400 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-400 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${
                        kpi.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {kpi.change}
                      </span>
                      <span className="text-white/60 text-sm ml-1">vs last period</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${kpi.color} rounded-xl flex items-center justify-center`}>
                    <kpi.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center">
                <Building className="h-5 w-5 mr-2 text-blue-400" />
                Service Performance
              </CardTitle>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <ExternalLink className="h-4 w-4 mr-1" />
                Details
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {servicePerformance.map((service, index) => (
                <div key={service.service} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{service.service}</h4>
                    <Badge className={`${
                      service.growth > 15 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      service.growth > 10 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      +{service.growth}%
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-xs">
                    <div>
                      <p className="text-white/50">Leads</p>
                      <p className="text-white font-medium">{service.leads}</p>
                    </div>
                    <div>
                      <p className="text-white/50">Conversions</p>
                      <p className="text-white font-medium">{service.conversions}</p>
                    </div>
                    <div>
                      <p className="text-white/50">Revenue</p>
                      <p className="text-white font-medium">AED {service.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white/50">Rating</p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <p className="text-white font-medium">{service.avgRating}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Conversion Rate</span>
                      <span>{Math.round((service.conversions / service.leads) * 100)}%</span>
                    </div>
                    <Progress value={(service.conversions / service.leads) * 100} className="h-1" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Area Performance */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-400" />
                Area Performance
              </CardTitle>
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <ExternalLink className="h-4 w-4 mr-1" />
                Details
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {areaPerformance.map((area, index) => (
                <div key={area.area} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{area.area}</h4>
                    <Badge className={`${
                      area.growth > 20 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      area.growth > 15 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      +{area.growth}%
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-xs">
                    <div>
                      <p className="text-white/50">Leads</p>
                      <p className="text-white font-medium">{area.leads}</p>
                    </div>
                    <div>
                      <p className="text-white/50">Providers</p>
                      <p className="text-white font-medium">{area.providers}</p>
                    </div>
                    <div>
                      <p className="text-white/50">Revenue</p>
                      <p className="text-white font-medium">AED {area.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white/50">Satisfaction</p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <p className="text-white font-medium">{area.satisfaction}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Market Penetration</span>
                      <span>{Math.round((area.leads / 1000) * 100)}%</span>
                    </div>
                    <Progress value={(area.leads / 1000) * 100} className="h-1" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Performing Providers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white flex items-center">
              <Award className="h-5 w-5 mr-2 text-purple-400" />
              Top Performing Providers
            </CardTitle>
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
              <ExternalLink className="h-4 w-4 mr-1" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {topProviders.map((provider, index) => (
                <div key={provider.name} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-white">{provider.name}</h4>
                      <p className="text-white/60 text-sm">{provider.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{provider.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Leads</span>
                      <span className="text-white">{provider.leads}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Completions</span>
                      <span className="text-white">{provider.completions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Revenue</span>
                      <span className="text-white">AED {provider.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Avg Response</span>
                      <span className="text-white">{provider.responseTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Completion Rate</span>
                      <span>{Math.round((provider.completions / provider.leads) * 100)}%</span>
                    </div>
                    <Progress value={(provider.completions / provider.leads) * 100} className="h-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-medium mb-2">Page Views</h3>
            <p className="text-2xl font-bold text-white">1.2M</p>
            <p className="text-green-400 text-sm mt-1">+12.5% increase</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-medium mb-2">Lead Quality</h3>
            <p className="text-2xl font-bold text-white">87%</p>
            <p className="text-green-400 text-sm mt-1">+3.2% improvement</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-medium mb-2">Platform Uptime</h3>
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-green-400 text-sm mt-1">Excellent performance</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-medium mb-2">Growth Rate</h3>
            <p className="text-2xl font-bold text-white">23.8%</p>
            <p className="text-green-400 text-sm mt-1">Month over month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}