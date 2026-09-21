import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ProjectEnquiry {
  id: string;
  created_at: string;
  full_name: string;
  business_name: string;
  business_type: string;
  project_type: string;
  business_description: string;
  goals: string[];
  features: string[];
  has_website: string;
  current_website_url: string | null;
  budget: string;
  timeline: string;
  email: string;
  phone: string;
  status: 'new' | 'reviewing' | 'replied' | 'archived';
}

export const supabaseConfigReady = Boolean(supabase);
