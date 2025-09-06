'use client';

import { useState } from 'react';
import { 
  BarChart3, Users, Settings, FileText, Bell, Shield, 
  Calendar, MessageSquare, TrendingUp, Home, MapPin, X, Globe, ChevronRight, HelpCircle, Building, CreditCard, Cog, UserCheck, LogOut, Menu, DollarSign,
  Database, Mail, Package, Image, Zap, Activity, BookOpen, Star, Headphones, UserPlus, ShoppingBag, Target, Truck, Layers, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    content: false,
    providers: false,
    analytics: false,
    settings: false,
    notifications: false,
    security: false
  });
  const pathname = usePathname();
  const router = useRouter();

  const toggleExpanded = (section: string) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleLogout = () => {
    router.push('/admin');
  };

  if (pathname === '/admin') {
    return children;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-neutral-900/95 backdrop-blur-lg border-r border-white/10
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
            <Link href="/admin/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Super Admin</h1>
                <p className="text-xs text-white/60">HOMIZON</p>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {/* Dashboard */}
            <Link 
              href="/admin/dashboard" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === '/admin/dashboard' 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>

            {/* Content Management */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleExpanded('content')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10`}
              >
                <Globe className="h-5 w-5" />
                <span>Content Management</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${expanded.content ? 'rotate-90' : ''}`} />
              </button>
              {expanded.content && (
                <div className="ml-6 space-y-1">
                  <Link 
                    href="/admin/pages" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/pages' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    <span>Pages & Content</span>
                  </Link>
                  <Link 
                    href="/admin/pages-editor" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/pages-editor' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Content Editor</span>
                  </Link>
                  <Link 
                    href="/admin/faqs" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/faqs' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>FAQ Management</span>
                  </Link>
                  <Link 
                    href="/admin/banners" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/banners' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Image className="h-4 w-4" />
                    <span>Banners & Media</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Services & Areas */}
            <div className="space-y-1">
              <Link 
                href="/admin/services" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === '/admin/services' 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Cog className="h-5 w-5" />
                <span>Services Management</span>
              </Link>
              
              <Link 
                href="/admin/areas" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === '/admin/areas' 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <MapPin className="h-5 w-5" />
                <span>Areas Management</span>
              </Link>
            </div>

            {/* Provider Management */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleExpanded('providers')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10`}
              >
                <Users className="h-5 w-5" />
                <span>Provider Management</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${expanded.providers ? 'rotate-90' : ''}`} />
              </button>
              {expanded.providers && (
                <div className="ml-6 space-y-1">
                  <Link 
                    href="/admin/providers" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/providers' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <UserCheck className="h-4 w-4" />
                    <span>All Providers</span>
                  </Link>
                  <Link 
                    href="/admin/leads" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/leads' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Target className="h-4 w-4" />
                    <span>Leads & Bookings</span>
                    <div className="ml-auto">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">12</Badge>
                    </div>
                  </Link>
                  <Link 
                    href="/admin/subscriptions" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/subscriptions' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Subscriptions</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing Management */}
            <Link 
              href="/admin/pricing" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === '/admin/pricing' 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <DollarSign className="h-5 w-5" />
              <span>Pricing Management</span>
            </Link>

            {/* Analytics & Reports */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleExpanded('analytics')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10`}
              >
                <TrendingUp className="h-5 w-5" />
                <span>Analytics & Reports</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${expanded.analytics ? 'rotate-90' : ''}`} />
              </button>
              {expanded.analytics && (
                <div className="ml-6 space-y-1">
                  <Link 
                    href="/admin/analytics" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/analytics' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <BarChart3 className="h-4 w-4" />
                    <span>Analytics Overview</span>
                  </Link>
                  <Link 
                    href="/admin/analytics-integration" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/analytics-integration' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Activity className="h-4 w-4" />
                    <span>Analytics Integration</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleExpanded('notifications')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10`}
              >
                <Bell className="h-5 w-5" />
                <span>Communications</span>
                <div className="ml-auto flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">5</Badge>
                  <ChevronRight className={`h-4 w-4 transition-transform ${expanded.notifications ? 'rotate-90' : ''}`} />
                </div>
              </button>
              {expanded.notifications && (
                <div className="ml-6 space-y-1">
                  <Link 
                    href="/admin/notifications" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/notifications' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Notifications</span>
                  </Link>
                  <Link 
                    href="/admin/notifications/integrations" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/notifications/integrations' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Zap className="h-4 w-4" />
                    <span>Integrations</span>
                  </Link>
                </div>
              )}
            </div>

            {/* System Settings */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleExpanded('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10`}
              >
                <Settings className="h-5 w-5" />
                <span>System Settings</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${expanded.settings ? 'rotate-90' : ''}`} />
              </button>
              {expanded.settings && (
                <div className="ml-6 space-y-1">
                  <Link 
                    href="/admin/settings" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/settings' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Cog className="h-4 w-4" />
                    <span>General Settings</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Security */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleExpanded('security')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10`}
              >
                <Shield className="h-5 w-5" />
                <span>Security & Access</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${expanded.security ? 'rotate-90' : ''}`} />
              </button>
              {expanded.security && (
                <div className="ml-6 space-y-1">
                  <Link 
                    href="/admin/security" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/security' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Lock className="h-4 w-4" />
                    <span>Security Center</span>
                  </Link>
                  <Link 
                    href="/admin/roles" 
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                      pathname === '/admin/roles' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Roles & Permissions</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs font-medium px-4 mb-2">QUICK ACTIONS</p>
              <Link 
                href="/" 
                target="_blank"
                className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10"
              >
                <Home className="h-4 w-4" />
                <span>View Website</span>
              </Link>
            </div>
          </nav>

          {/* User section */}
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <UserCheck className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Super Admin</p>
                <p className="text-xs text-white/60">admin@homizon.com</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full text-gray-900 border-white/20 hover:bg-white/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-72">
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-neutral-900/95 backdrop-blur-lg border-b border-white/10 h-16">
          <div className="flex items-center justify-between px-6 h-full">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Super Admin Dashboard
                </h2>
                <p className="text-sm text-white/60">
                  Complete platform control and management
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Link href="/admin/settings">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}