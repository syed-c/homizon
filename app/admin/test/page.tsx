"use client";

import React from 'react';

export default function AdminTest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-4">Admin Test Page</h1>
      <p className="text-white/70">This is a simple test page to check if admin routing works.</p>
      <div className="mt-4 p-4 bg-green-500/20 rounded-lg">
        <p className="text-green-400">If you can see this, the admin system is working!</p>
      </div>
    </div>
  );
}