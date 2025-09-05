"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BarChart3, User, MessageSquare, LogOut, 
  Shield, Bell, Settings, Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Provider {
  id: string;
  name: string;
  email: string;
  profileimage?: string;
  status: string;
}

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Get provider from localStorage
    const storedProvider = localStorage.getItem('provider');
    if (storedProvider) {
      setProvider(JSON.parse(storedProvider));
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('provider');
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-white/60 mb-6">Please log in to access your dashboard</p>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
              Go to Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentPage = pathname.split('/').pop();

  const navigation = [
    { name: 'Dashboard', href: `/provider/${provider.name.toLowerCase().replace(/\s+/g, '-')}/dashboard`, icon: BarChart3, current: currentPage === 'dashboard' },
    { name: 'Profile', href: `/provider/${provider.name.toLowerCase().replace(/\s+/g, '-')}/profile`, icon: User, current: currentPage === 'profile' },
    { name: 'Leads', href: `/provider/${provider.name.toLowerCase().replace(/\s+/g, '-')}/leads`, icon: MessageSquare, current: currentPage === 'leads' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen border-r border-gray-700">
          <div className="p-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Provider</div>
                <div className="text-gray-400 text-sm">HOMIZON</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      item.current
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">QUICK ACTIONS</h3>
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span className="font-medium">View Website</span>
                </motion.div>
              </Link>
            </div>

            {/* User Profile */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">{provider.name}</div>
                  <div className="text-gray-400 text-sm">{provider.email}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
