"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Shield, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProviderLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/provider-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok && data.provider) {
        // Optional: still store provider profile for UI, but auth is cookie-based
        localStorage.setItem('provider', JSON.stringify(data.provider));
        // Redirect to provider dashboard using /provider/[providerName] route
        const providerSlug = data.provider.name.toLowerCase().replace(/\s+/g, '-');
        router.push(`/provider/${providerSlug}/dashboard`);
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-white">Provider Portal</CardTitle>
              <p className="text-white/60 mt-2">Access your service provider dashboard</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="text-red-400 text-sm text-center">{error}</div>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white h-12"
                >
                  {loading ? 'Signing In...' : 'Access Dashboard'}
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  Don't have an account?{' '}
                  <Link href="/providers/register" className="text-purple-400 hover:text-purple-300">
                    Register as Provider
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Right Side - Platform Overview */}
      <div className="flex-1 bg-black flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Provider <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-white/80 text-lg">
              Manage your leads, update your profile, and track your performance from one powerful dashboard.
            </p>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total Leads</p>
                  <p className="text-2xl font-bold text-white">0</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-white">0</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Incomplete</p>
                  <p className="text-2xl font-bold text-white">0</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Reviews</p>
                  <p className="text-2xl font-bold text-white">0</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="space-y-3"
          >
            <h3 className="text-white font-semibold mb-4">Dashboard Features</h3>
            <div className="space-y-2">
              {[
                'Real-time Lead Management',
                'Profile & Service Updates',
                'Performance Analytics',
                'Customer Communication',
                'Service Area Management'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
