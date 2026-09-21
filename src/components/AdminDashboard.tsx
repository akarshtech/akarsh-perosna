import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { ArrowLeft, LogOut, RefreshCw } from 'lucide-react';
import { supabase, supabaseConfigReady, ProjectEnquiry } from '@/lib/supabase';

const statusOptions: ProjectEnquiry['status'][] = ['new', 'reviewing', 'replied', 'archived'];
const ADMIN_EMAIL = 'its.akarsh115e@gmail.com';

export default function AdminDashboard() {
  const [sessionEmail, setSessionEmail] = useState('');
  const [enquiries, setEnquiries] = useState<ProjectEnquiry[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const loadEnquiries = async () => {
    if (!supabase) return;
    const { data, error } = await supabase.from('project_enquiries').select('*').order('created_at', { ascending: false });
    if (error) setMessage(error.message);
    else setEnquiries(data ?? []);
  };

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSessionEmail(data.session?.user.email ?? '');
      if (data.session) loadEnquiries();
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSessionEmail(nextSession?.user.email ?? '');
      if (nextSession) loadEnquiries();
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const signIn = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setMessage('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setMessage('Unable to sign in. Check your email and password.');
  };

  const updateStatus = async (id: string, status: ProjectEnquiry['status']) => {
    if (!supabase) return;
    const { error } = await supabase.from('project_enquiries').update({ status }).eq('id', id);
    if (error) setMessage(error.message);
    else setEnquiries((current) => current.map((item) => item.id === id ? { ...item, status } : item));
  };

  if (!supabaseConfigReady) {
    return <AdminShell><p className="admin-muted">Supabase is not configured for this environment.</p></AdminShell>;
  }

  if (sessionEmail && sessionEmail.toLowerCase() !== ADMIN_EMAIL) {
    return <AdminShell><div className="admin-login"><p className="admin-kicker">ACCESS RESTRICTED</p><h1>Private workspace.</h1><p className="admin-muted">This account is not authorized to view enquiries.</p><button onClick={() => supabase?.auth.signOut()}>Sign out</button></div></AdminShell>;
  }

  if (!sessionEmail) {
    return <AdminShell><form className="admin-login" onSubmit={signIn}><p className="admin-kicker">PRIVATE WORKSPACE</p><h1>Enquiry inbox.</h1><p className="admin-muted">Sign in to review project enquiries.</p><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>{message && <p className="admin-error">{message}</p>}<button disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button></form></AdminShell>;
  }

  return <AdminShell><header className="admin-header"><div><p className="admin-kicker">PRIVATE WORKSPACE / {sessionEmail}</p><h1>Project enquiries.</h1></div><div className="admin-actions"><button onClick={loadEnquiries} aria-label="Refresh enquiries"><RefreshCw size={16} /></button><button onClick={() => supabase?.auth.signOut()}><LogOut size={16} /> Sign out</button></div></header>{message && <p className="admin-error">{message}</p>}<div className="admin-list">{enquiries.length === 0 ? <p className="admin-muted">No enquiries yet.</p> : enquiries.map((item) => <article className="admin-card" key={item.id}><div className="admin-card-top"><div><p className="admin-kicker">{new Date(item.created_at).toLocaleDateString()}</p><h2>{item.business_name}</h2><p className="admin-muted">{item.full_name} · <a href={`mailto:${item.email}`}>{item.email}</a> · {item.phone}</p></div><select value={item.status} onChange={(event) => updateStatus(item.id, event.target.value as ProjectEnquiry['status'])}>{statusOptions.map((status) => <option value={status} key={status}>{status}</option>)}</select></div><p>{item.business_description}</p><dl><div><dt>Project</dt><dd>{item.project_type}</dd></div><div><dt>Budget</dt><dd>{item.budget}</dd></div><div><dt>Timeline</dt><dd>{item.timeline}</dd></div><div><dt>Goals</dt><dd>{item.goals.join(', ')}</dd></div><div><dt>Features</dt><dd>{item.features.join(', ') || 'None specified'}</dd></div></dl></article>)}</div></AdminShell>;
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return <div className="admin-page"><a className="admin-back" href="/"><ArrowLeft size={15} /> Back to site</a><main>{children}</main></div>;
}
