"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, User, Eye, EyeOff, Shield, 
  Building, Users, FileText, BarChart3,
  Settings, Bell, Star, LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        alert('Invalid credentials');
        return;
      }
      router.push('/admin/pages-editor');
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    { icon: Users, label: 'Active Providers', value: '156', color: 'from-blue-500 to-cyan-500' },
    { icon: FileText, label: 'Total Leads', value: '2,843', color: 'from-green-500 to-emerald-500' },
    { icon: Building, label: 'Service Areas', value: '45', color: 'from-purple-500 to-violet-500' },
    { icon: Star, label: 'Avg Rating', value: '4.8', color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">Super Admin</CardTitle>
                    <p className="text-white/60 text-sm">ServiceDubai Platform Control</p>
                  </div>
                </div>
                <p className="text-white/70">
                  Access comprehensive platform management tools
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/90">Email Address</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@servicedubai.com"
                        className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white/90">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold text-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <LogIn className="h-5 w-5" />
                        <span>Access Dashboard</span>
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-white/60 text-sm">Use admin credentials to continue.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Platform Overview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Platform
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Control Center
                </span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Manage providers, leads, content, and analytics from one powerful dashboard. 
                Complete control over your Dubai home services marketplace.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                          <stat.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-white/60 text-sm">{stat.label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                    Dashboard Features
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Provider Management & Approval System',
                      'Real-time Leads & Booking Analytics',
                      'Content Management for All Pages',
                      'FAQ Management System',
                      'Revenue Tracking & Reports'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}