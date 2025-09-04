"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, UserPlus, Shield, Key, Eye, Edit, Trash2, 
  CheckCircle, XCircle, Settings, Crown, User,
  Lock, Unlock, Plus, Search, Filter, MoreHorizontal,
  UserCheck, UserX, Star, AlertTriangle, Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  color: string;
  isDefault: boolean;
  userCount: number;
  createdAt: string;
  updatedAt: string;
}

interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
  isSystem: boolean;
}

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  roleName: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar: string;
  permissions: string[];
  createdAt: string;
  createdBy: string;
  loginHistory: LoginHistory[];
}

interface LoginHistory {
  id: string;
  timestamp: string;
  ipAddress: string;
  location: string;
  device: string;
  status: 'success' | 'failed';
}

// Sample permissions data
const permissions: Permission[] = [
  // Provider Management
  { id: 'providers.view', name: 'View Providers', description: 'View provider listings and details', category: 'Provider Management', isSystem: false },
  { id: 'providers.create', name: 'Create Providers', description: 'Add new service providers', category: 'Provider Management', isSystem: false },
  { id: 'providers.edit', name: 'Edit Providers', description: 'Modify provider information', category: 'Provider Management', isSystem: false },
  { id: 'providers.delete', name: 'Delete Providers', description: 'Remove providers from platform', category: 'Provider Management', isSystem: false },
  { id: 'providers.approve', name: 'Approve Providers', description: 'Approve or reject provider applications', category: 'Provider Management', isSystem: false },
  { id: 'providers.suspend', name: 'Suspend Providers', description: 'Suspend or reactivate provider accounts', category: 'Provider Management', isSystem: false },
  
  // Lead Management
  { id: 'leads.view', name: 'View Leads', description: 'View customer leads and inquiries', category: 'Lead Management', isSystem: false },
  { id: 'leads.assign', name: 'Assign Leads', description: 'Manually assign leads to providers', category: 'Lead Management', isSystem: false },
  { id: 'leads.export', name: 'Export Leads', description: 'Export lead data to CSV/Excel', category: 'Lead Management', isSystem: false },
  { id: 'leads.delete', name: 'Delete Leads', description: 'Remove leads from system', category: 'Lead Management', isSystem: false },
  
  // Content Management
  { id: 'pages.view', name: 'View Pages', description: 'View website pages and content', category: 'Content Management', isSystem: false },
  { id: 'pages.edit', name: 'Edit Pages', description: 'Edit website content and pages', category: 'Content Management', isSystem: false },
  { id: 'pages.create', name: 'Create Pages', description: 'Create new website pages', category: 'Content Management', isSystem: false },
  { id: 'pages.delete', name: 'Delete Pages', description: 'Remove website pages', category: 'Content Management', isSystem: false },
  
  // FAQ Management
  { id: 'faqs.view', name: 'View FAQs', description: 'View FAQ sections', category: 'FAQ Management', isSystem: false },
  { id: 'faqs.edit', name: 'Edit FAQs', description: 'Edit FAQ content', category: 'FAQ Management', isSystem: false },
  { id: 'faqs.create', name: 'Create FAQs', description: 'Add new FAQs', category: 'FAQ Management', isSystem: false },
  { id: 'faqs.delete', name: 'Delete FAQs', description: 'Remove FAQs', category: 'FAQ Management', isSystem: false },
  
  // Analytics
  { id: 'analytics.view', name: 'View Analytics', description: 'View platform analytics and reports', category: 'Analytics', isSystem: false },
  { id: 'analytics.export', name: 'Export Analytics', description: 'Export analytics data', category: 'Analytics', isSystem: false },
  
  // System Settings
  { id: 'settings.view', name: 'View Settings', description: 'View system settings', category: 'System Settings', isSystem: false },
  { id: 'settings.edit', name: 'Edit Settings', description: 'Modify system settings', category: 'System Settings', isSystem: true },
  { id: 'settings.security', name: 'Security Settings', description: 'Manage security configurations', category: 'System Settings', isSystem: true },
  
  // User Management
  { id: 'users.view', name: 'View Users', description: 'View admin users and roles', category: 'User Management', isSystem: true },
  { id: 'users.create', name: 'Create Users', description: 'Create new admin users', category: 'User Management', isSystem: true },
  { id: 'users.edit', name: 'Edit Users', description: 'Edit admin user details', category: 'User Management', isSystem: true },
  { id: 'users.delete', name: 'Delete Users', description: 'Remove admin users', category: 'User Management', isSystem: true },
  { id: 'roles.manage', name: 'Manage Roles', description: 'Create and manage user roles', category: 'User Management', isSystem: true }
];

// Sample roles data
const roles: Role[] = [
  {
    id: 'role-super-admin',
    name: 'Super Admin',
    description: 'Full access to all platform features and settings',
    permissions: permissions.map(p => p.id),
    color: 'from-red-500 to-red-600',
    isDefault: true,
    userCount: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'role-admin',
    name: 'Admin',
    description: 'Access to most features except system-critical settings',
    permissions: permissions.filter(p => !p.isSystem).map(p => p.id),
    color: 'from-blue-500 to-blue-600',
    isDefault: true,
    userCount: 3,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'role-manager',
    name: 'Lead Manager',
    description: 'Manage leads, providers, and basic content',
    permissions: [
      'providers.view', 'providers.edit', 'providers.approve',
      'leads.view', 'leads.assign', 'leads.export',
      'pages.view', 'pages.edit',
      'faqs.view', 'faqs.edit', 'faqs.create',
      'analytics.view'
    ],
    color: 'from-green-500 to-green-600',
    isDefault: false,
    userCount: 5,
    createdAt: '2024-01-05T14:20:00Z',
    updatedAt: '2024-01-10T09:15:00Z'
  },
  {
    id: 'role-editor',
    name: 'Content Editor',
    description: 'Edit website content and manage FAQs',
    permissions: [
      'pages.view', 'pages.edit', 'pages.create',
      'faqs.view', 'faqs.edit', 'faqs.create', 'faqs.delete',
      'providers.view',
      'leads.view',
      'analytics.view'
    ],
    color: 'from-purple-500 to-purple-600',
    isDefault: false,
    userCount: 2,
    createdAt: '2024-01-08T11:45:00Z',
    updatedAt: '2024-01-12T16:30:00Z'
  },
  {
    id: 'role-support',
    name: 'Support Team',
    description: 'View-only access for customer support',
    permissions: [
      'providers.view',
      'leads.view',
      'pages.view',
      'faqs.view',
      'analytics.view'
    ],
    color: 'from-yellow-500 to-yellow-600',
    isDefault: false,
    userCount: 8,
    createdAt: '2024-01-10T08:30:00Z',
    updatedAt: '2024-01-10T08:30:00Z'
  }
];

// Sample admin users data
const adminUsers: AdminUser[] = [
  {
    id: 'admin-001',
    name: 'Super Admin',
    email: 'admin@servicedubai.com',
    role: 'role-super-admin',
    roleName: 'Super Admin',
    status: 'active',
    lastLogin: '2025-01-14T10:30:00Z',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    permissions: permissions.map(p => p.id),
    createdAt: '2024-01-01T00:00:00Z',
    createdBy: 'System',
    loginHistory: []
  },
  {
    id: 'admin-002',
    name: 'Ahmed Al-Rashid',
    email: 'ahmed@servicedubai.com',
    role: 'role-manager',
    roleName: 'Lead Manager',
    status: 'active',
    lastLogin: '2025-01-14T09:15:00Z',
    avatar: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    permissions: roles.find(r => r.id === 'role-manager')?.permissions || [],
    createdAt: '2024-01-05T14:20:00Z',
    createdBy: 'Super Admin',
    loginHistory: []
  },
  {
    id: 'admin-003',
    name: 'Sarah Johnson',
    email: 'sarah@servicedubai.com',
    role: 'role-editor',
    roleName: 'Content Editor',
    status: 'active',
    lastLogin: '2025-01-13T16:45:00Z',
    avatar: 'https://images.pexels.com/photos/7690076/pexels-photo-7690076.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    permissions: roles.find(r => r.id === 'role-editor')?.permissions || [],
    createdAt: '2024-01-08T11:45:00Z',
    createdBy: 'Super Admin',
    loginHistory: []
  },
  {
    id: 'admin-004',
    name: 'Michael Chen',
    email: 'michael@servicedubai.com',
    role: 'role-support',
    roleName: 'Support Team',
    status: 'inactive',
    lastLogin: '2025-01-10T14:20:00Z',
    avatar: 'https://images.pexels.com/photos/4050333/pexels-photo-4050333.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    permissions: roles.find(r => r.id === 'role-support')?.permissions || [],
    createdAt: '2024-01-10T08:30:00Z',
    createdBy: 'Super Admin',
    loginHistory: []
  }
];

export default function RolesPage() {
  const [activeTab, setActiveTab] = useState('roles');
  const [showCreateRole, setShowCreateRole] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const stats = [
    {
      title: 'Total Roles',
      value: roles.length.toString(),
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Admin Users',
      value: adminUsers.length.toString(),
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Active Users',
      value: adminUsers.filter(u => u.status === 'active').length.toString(),
      icon: UserCheck,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Permissions',
      value: permissions.length.toString(),
      icon: Key,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getRoleIcon = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'super admin': return Crown;
      case 'admin': return Shield;
      case 'lead manager': return Users;
      case 'content editor': return Edit;
      case 'support team': return User;
      default: return User;
    }
  };

  const groupedPermissions = permissions.reduce((acc, permission) => {
    if (!acc[permission.category]) {
      acc[permission.category] = [];
    }
    acc[permission.category].push(permission);
    return acc;
  }, {} as Record<string, Permission[]>);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Roles & Permissions</h1>
          <p className="text-white/60 mt-2">Manage user roles, permissions, and access control</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-gray-900 border-white/20 hover:bg-white/10"
            onClick={() => setShowCreateRole(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            onClick={() => setShowCreateUser(true)}
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
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

      {/* Main Content */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10">
              <TabsTrigger value="roles" className="data-[state=active]:bg-white/20">
                Roles Management
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-white/20">
                Admin Users
              </TabsTrigger>
              <TabsTrigger value="permissions" className="data-[state=active]:bg-white/20">
                Permissions
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="roles" className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    placeholder="Search roles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  onClick={() => setShowCreateRole(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Role
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map((role, index) => {
                  const RoleIcon = getRoleIcon(role.name);
                  
                  return (
                    <motion.div
                      key={role.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center`}>
                                <RoleIcon className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-semibold">{role.name}</h3>
                                <p className="text-white/60 text-sm">{role.userCount} users</p>
                              </div>
                            </div>
                            {role.isDefault && (
                              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                Default
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-white/70 text-sm mb-4">{role.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/60">Permissions</span>
                              <span className="text-white">{role.permissions.length}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/60">Created</span>
                              <span className="text-white">{new Date(role.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex-1 text-gray-900 border-white/20 hover:bg-white/10"
                              onClick={() => setSelectedRole(role)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-gray-900 border-white/20 hover:bg-white/10">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Role" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Roles</SelectItem>
                    {roles.map(role => (
                      <SelectItem key={role.id} value={role.id} className="text-white">
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  onClick={() => setShowCreateUser(true)}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>

              <div className="space-y-4">
                {adminUsers.map((user, index) => {
                  const RoleIcon = getRoleIcon(user.roleName);
                  
                  return (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                              <div className="relative">
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                                />
                                <div className="absolute -bottom-1 -right-1">
                                  <div className={`w-5 h-5 rounded-full border-2 border-neutral-900 ${
                                    user.status === 'active' ? 'bg-green-400' :
                                    user.status === 'inactive' ? 'bg-gray-400' : 'bg-yellow-400'
                                  }`}></div>
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                                  <Badge className={getStatusColor(user.status)}>
                                    {user.status}
                                  </Badge>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                  <div>
                                    <p className="text-white/60 text-xs">Email</p>
                                    <p className="text-white text-sm">{user.email}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-xs">Role</p>
                                    <div className="flex items-center space-x-1">
                                      <RoleIcon className="h-4 w-4 text-blue-400" />
                                      <span className="text-white text-sm">{user.roleName}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-xs">Last Login</p>
                                    <p className="text-white text-sm">{new Date(user.lastLogin).toLocaleDateString()}</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center space-x-6 text-sm text-white/60">
                                  <div className="flex items-center space-x-1">
                                    <Key className="h-4 w-4" />
                                    <span>{user.permissions.length} permissions</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <User className="h-4 w-4" />
                                    <span>Created by {user.createdBy}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4" />
                                    <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2 ml-4">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="text-gray-900 border-white/20 hover:bg-white/10"
                                onClick={() => setSelectedUser(user)}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-gray-900 border-white/20 hover:bg-white/10">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-gray-900 border-white/20 hover:bg-white/10">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="permissions" className="space-y-6">
              <div className="space-y-6">
                {Object.entries(groupedPermissions).map(([category, categoryPermissions]) => (
                  <Card key={category} className="bg-white/5 backdrop-blur-sm border border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryPermissions.map((permission) => (
                          <div key={permission.id} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                            <div className={`w-3 h-3 rounded-full mt-1 ${
                              permission.isSystem ? 'bg-red-400' : 'bg-green-400'
                            }`}></div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium text-sm">{permission.name}</h4>
                              <p className="text-white/60 text-xs mt-1">{permission.description}</p>
                              {permission.isSystem && (
                                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mt-2">
                                  System
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Create Role Dialog */}
      <Dialog open={showCreateRole} onOpenChange={setShowCreateRole}>
        <DialogContent className="bg-neutral-900 border-white/20 text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle>Create New Role</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Role Name</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Enter role name" />
              </div>
              <div>
                <Label>Role Color</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="blue" className="text-white">Blue</SelectItem>
                    <SelectItem value="green" className="text-white">Green</SelectItem>
                    <SelectItem value="purple" className="text-white">Purple</SelectItem>
                    <SelectItem value="red" className="text-white">Red</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Description</Label>
              <Input className="bg-white/10 border-white/20 text-white" placeholder="Role description" />
            </div>
            
            <div>
              <Label>Permissions</Label>
              <div className="space-y-4 mt-2">
                {Object.entries(groupedPermissions).map(([category, categoryPermissions]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-white font-medium">{category}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {categoryPermissions.map((permission) => (
                        <div key={permission.id} className="flex items-center space-x-2">
                          <Checkbox id={permission.id} />
                          <label htmlFor={permission.id} className="text-white/80 text-sm">
                            {permission.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3">
              <Button variant="outline" className="text-gray-900 border-white/20" onClick={() => setShowCreateRole(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Create Role
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create User Dialog */}
      <Dialog open={showCreateUser} onOpenChange={setShowCreateUser}>
        <DialogContent className="bg-neutral-900 border-white/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Admin User</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Enter full name" />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Enter email" />
              </div>
            </div>
            
            <div>
              <Label>Role</Label>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-white/20">
                  {roles.map(role => (
                    <SelectItem key={role.id} value={role.id} className="text-white">
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Password</Label>
                <Input type="password" className="bg-white/10 border-white/20 text-white" placeholder="Enter password" />
              </div>
              <div>
                <Label>Confirm Password</Label>
                <Input type="password" className="bg-white/10 border-white/20 text-white" placeholder="Confirm password" />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3">
              <Button variant="outline" className="text-gray-900 border-white/20" onClick={() => setShowCreateUser(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Create User
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}