'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from '@/hooks/use-toast'
import { 
  User, Phone, Mail, MapPin, Clock, CheckCircle, 
  X, AlertCircle, Star, Calendar, MessageSquare,
  TrendingUp, DollarSign, Target, Award, Bell
} from 'lucide-react'

interface Lead {
  id: string
  customerName: string
  customerPhone: string
  customerEmail?: string
  serviceName: string
  areaName: string
  address: string
  description: string
  urgency: 'normal' | 'urgent' | 'emergency'
  status: 'new' | 'assigned' | 'accepted' | 'in_progress' | 'completed' | 'cancelled'
  createdAt: string
  preferredTime?: string
  estimatedPrice?: string
  providerId?: string
  providerResponse?: 'pending' | 'accepted' | 'declined'
}

interface ProviderStats {
  totalLeads: number
  acceptedLeads: number
  completedJobs: number
  averageRating: number
  responseTime: string
  earnings: number
}

export default function ProviderDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState<ProviderStats>({
    totalLeads: 0,
    acceptedLeads: 0,
    completedJobs: 0,
    averageRating: 0,
    responseTime: '0 min',
    earnings: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('available')

  // Mock provider ID - in production, this would come from authentication
  const providerId = 'ahmed-ac-expert'

  useEffect(() => {
    loadProviderData()
    // Set up real-time updates
    const interval = setInterval(loadProviderData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const loadProviderData = async () => {
    try {
      const [leadsResponse, statsResponse] = await Promise.all([
        fetch(`/api/providers/${providerId}/leads`),
        fetch(`/api/providers/${providerId}/stats`)
      ])

      if (leadsResponse.ok) {
        const leadsData = await leadsResponse.json()
        setLeads(leadsData)
      }

      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setStats(statsData)
      }
    } catch (error) {
      console.error('Failed to load provider data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLeadResponse = async (leadId: string, response: 'accepted' | 'declined') => {
    try {
      const apiResponse = await fetch(`/api/providers/${providerId}/leads/${leadId}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ response })
      })

      if (apiResponse.ok) {
        // Update local state
        setLeads(prev => prev.map(lead => 
          lead.id === leadId 
            ? { ...lead, providerResponse: response, status: response === 'accepted' ? 'accepted' : 'new' }
            : lead
        ))

        toast({
          title: response === 'accepted' ? "✅ Lead Accepted" : "❌ Lead Declined",
          description: response === 'accepted' 
            ? "Customer will be notified. You can now contact them directly."
            : "Lead has been declined and will be offered to other providers.",
          duration: 5000,
        })

        // Reload data to get updated stats
        loadProviderData()
      } else {
        throw new Error('Failed to respond to lead')
      }
    } catch (error) {
      console.error('Error responding to lead:', error)
      toast({
        title: "❌ Response Failed",
        description: "Failed to respond to lead. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const updateLeadStatus = async (leadId: string, status: Lead['status']) => {
    try {
      const response = await fetch(`/api/providers/${providerId}/leads/${leadId}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })

      if (response.ok) {
        setLeads(prev => prev.map(lead => 
          lead.id === leadId ? { ...lead, status } : lead
        ))

        toast({
          title: "✅ Status Updated",
          description: `Lead status updated to ${status.replace('_', ' ')}.`,
          duration: 3000,
        })

        loadProviderData()
      }
    } catch (error) {
      console.error('Error updating lead status:', error)
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500'
      case 'urgent': return 'bg-orange-500'
      default: return 'bg-blue-500'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500'
      case 'accepted': return 'bg-green-500'
      case 'in_progress': return 'bg-yellow-500'
      case 'completed': return 'bg-purple-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const filterLeads = (filterType: string) => {
    switch (filterType) {
      case 'available':
        return leads.filter(lead => 
          lead.status === 'new' && 
          (!lead.providerResponse || lead.providerResponse === 'pending')
        )
      case 'accepted':
        return leads.filter(lead => 
          lead.providerResponse === 'accepted' || lead.status === 'accepted'
        )
      case 'active':
        return leads.filter(lead => 
          ['accepted', 'in_progress'].includes(lead.status)
        )
      case 'completed':
        return leads.filter(lead => lead.status === 'completed')
      default:
        return leads
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
        <div className="text-white">Loading provider dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Provider Dashboard</h1>
            <p className="text-white/60 mt-2">Manage your leads and track your performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Total Leads</p>
                  <p className="text-2xl font-bold text-white">{stats.totalLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Accepted</p>
                  <p className="text-2xl font-bold text-white">{stats.acceptedLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Award className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-white">{stats.completedJobs}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-600/20 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Rating</p>
                  <p className="text-2xl font-bold text-white">{stats.averageRating}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-600/20 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Response</p>
                  <p className="text-2xl font-bold text-white">{stats.responseTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Earnings</p>
                  <p className="text-2xl font-bold text-white">AED {stats.earnings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leads Management */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Lead Management</CardTitle>
            <CardDescription>Manage your service requests and customer interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-white/10">
                <TabsTrigger value="available">Available ({filterLeads('available').length})</TabsTrigger>
                <TabsTrigger value="accepted">Accepted ({filterLeads('accepted').length})</TabsTrigger>
                <TabsTrigger value="active">Active ({filterLeads('active').length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({filterLeads('completed').length})</TabsTrigger>
              </TabsList>

              {['available', 'accepted', 'active', 'completed'].map(tabValue => (
                <TabsContent key={tabValue} value={tabValue} className="space-y-4">
                  {filterLeads(tabValue).length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-white/40 text-lg">No {tabValue} leads found</div>
                      <p className="text-white/30 text-sm mt-2">
                        {tabValue === 'available' && "New leads will appear here when customers request your services."}
                        {tabValue === 'accepted' && "Leads you've accepted will appear here."}
                        {tabValue === 'active' && "Your ongoing jobs will appear here."}
                        {tabValue === 'completed' && "Your completed jobs will appear here."}
                      </p>
                    </div>
                  ) : (
                    filterLeads(tabValue).map(lead => (
                      <Card key={lead.id} className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                  <Badge className={`${getUrgencyColor(lead.urgency)} text-white`}>
                                    {lead.urgency}
                                  </Badge>
                                  <Badge className={`${getStatusColor(lead.status)} text-white`}>
                                    {lead.status.replace('_', ' ')}
                                  </Badge>
                                </div>
                                <span className="text-white/60 text-sm">
                                  {new Date(lead.createdAt).toLocaleDateString()}
                                </span>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-white">
                                    <User className="h-4 w-4" />
                                    <span className="font-semibold">{lead.customerName}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-white/70">
                                    <Phone className="h-4 w-4" />
                                    <span>{lead.customerPhone}</span>
                                  </div>
                                  {lead.customerEmail && (
                                    <div className="flex items-center space-x-2 text-white/70">
                                      <Mail className="h-4 w-4" />
                                      <span>{lead.customerEmail}</span>
                                    </div>
                                  )}
                                </div>

                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-white">
                                    <Target className="h-4 w-4" />
                                    <span className="font-semibold">{lead.serviceName}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-white/70">
                                    <MapPin className="h-4 w-4" />
                                    <span>{lead.areaName}</span>
                                  </div>
                                  {lead.preferredTime && (
                                    <div className="flex items-center space-x-2 text-white/70">
                                      <Calendar className="h-4 w-4" />
                                      <span>{lead.preferredTime}</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {lead.description && (
                                <div className="flex items-start space-x-2 text-white/70">
                                  <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0" />
                                  <p>{lead.description}</p>
                                </div>
                              )}

                              {lead.address && (
                                <div className="flex items-start space-x-2 text-white/70">
                                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                  <p>{lead.address}</p>
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col space-y-2 ml-6">
                              {tabValue === 'available' && !lead.providerResponse && (
                                <>
                                  <Button
                                    onClick={() => handleLeadResponse(lead.id, 'accepted')}
                                    className="bg-green-600 hover:bg-green-700 text-white"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Accept
                                  </Button>
                                  <Button
                                    onClick={() => handleLeadResponse(lead.id, 'declined')}
                                    variant="outline"
                                    className="border-red-500 text-red-400 hover:bg-red-500/10"
                                  >
                                    <X className="h-4 w-4 mr-2" />
                                    Decline
                                  </Button>
                                </>
                              )}

                              {(tabValue === 'accepted' || tabValue === 'active') && (
                                <div className="space-y-2">
                                  {lead.status === 'accepted' && (
                                    <Button
                                      onClick={() => updateLeadStatus(lead.id, 'in_progress')}
                                      className="bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                      Start Job
                                    </Button>
                                  )}
                                  {lead.status === 'in_progress' && (
                                    <Button
                                      onClick={() => updateLeadStatus(lead.id, 'completed')}
                                      className="bg-purple-600 hover:bg-purple-700 text-white"
                                    >
                                      Complete
                                    </Button>
                                  )}
                                  <Button
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10"
                                  >
                                    <Phone className="h-4 w-4 mr-2" />
                                    Call Customer
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}