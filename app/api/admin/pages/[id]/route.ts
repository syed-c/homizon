import { NextRequest, NextResponse } from 'next/server';
import { services, areas, generateServiceAreaContent } from '@/lib/data';

// Simplified page customizations storage - same as in main pages route
const pageCustomizations: { [key: string]: any } = {};