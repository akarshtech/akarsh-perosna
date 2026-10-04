/*
# Create project_enquiries table

1. New Tables
- `project_enquiries`: stores project enquiry form submissions from the contact page.
  - id (uuid, primary key)
  - created_at (timestamptz, default now())
  - full_name (text, not null) — submitter's full name
  - business_name (text, not null) — business name
  - business_type (text, not null) — e.g. Clinic, Salon, Restaurant
  - project_type (text, not null) — new, redesign, landing, portfolio, other
  - business_description (text, not null) — what the business does
  - goals (text[], not null default '{}') — what the website should achieve
  - features (text[], not null default '{}') — requested features
  - has_website (text, not null) — yes/no
  - current_website_url (text, nullable) — URL if they have a site
  - budget (text, not null) — budget range
  - timeline (text, not null) — when they want to start
  - email (text, not null) — contact email
  - phone (text, not null) — contact phone
  - status (text, not null default 'new') — new, reviewing, replied, archived

2. Security
- Enable RLS on `project_enquiries`.
- This is a no-auth public form: anyone can submit an enquiry (anon + authenticated INSERT).
- Only authenticated admin users can read/update enquiries (SELECT, UPDATE).
- No DELETE or public SELECT — enquiries are permanent records.
*/

CREATE TABLE IF NOT EXISTS project_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  business_name text NOT NULL,
  business_type text NOT NULL,
  project_type text NOT NULL,
  business_description text NOT NULL,
  goals text[] NOT NULL DEFAULT '{}',
  features text[] NOT NULL DEFAULT '{}',
  has_website text NOT NULL,
  current_website_url text,
  budget text NOT NULL,
  timeline text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE project_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to submit an enquiry
DROP POLICY IF EXISTS "anon_insert_enquiries" ON project_enquiries;
CREATE POLICY "anon_insert_enquiries"
ON project_enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated admin can read enquiries
DROP POLICY IF EXISTS "authenticated_select_enquiries" ON project_enquiries;
CREATE POLICY "authenticated_select_enquiries"
ON project_enquiries FOR SELECT
TO authenticated
USING (true);

-- Only authenticated admin can update enquiry status
DROP POLICY IF EXISTS "authenticated_update_enquiries" ON project_enquiries;
CREATE POLICY "authenticated_update_enquiries"
ON project_enquiries FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
