import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useAtmosphere } from '@/context/AtmosphereContext';

interface FormData {
  fullName: string;
  businessName: string;
  businessType: string;
  projectType: string;
  businessDescription: string;
  goals: string[];
  features: string[];
  hasWebsite: string;
  currentWebsiteUrl: string;
  budget: string;
  timeline: string;
  email: string;
  phone: string;
  otherProjectType: string;
  otherGoals: string;
  otherFeatures: string;
}

export default function Contact() {
  const { mode } = useAtmosphere();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    businessType: '',
    projectType: '',
    businessDescription: '',
    goals: [],
    features: [],
    hasWebsite: '',
    currentWebsiteUrl: '',
    budget: '',
    timeline: '',
    email: '',
    phone: '',
    otherProjectType: '',
    otherGoals: '',
    otherFeatures: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'goals' | 'features') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.businessName || !formData.businessType || !formData.projectType ||
        !formData.businessDescription || formData.goals.length === 0 || !formData.hasWebsite ||
        !formData.budget || !formData.timeline || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!/^[+]?[\d\s\-()]{7,}$/.test(formData.phone)) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    const message = [
      'NEW PROJECT ENQUIRY',
      '',
      'CONTACT',
      `Name: ${formData.fullName}`,
      `Business: ${formData.businessName}`,
      `Email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone}`,
      '',
      'BUSINESS',
      `Business type: ${formData.businessType}`,
      `Business description: ${formData.businessDescription}`,
      '',
      'PROJECT',
      `Project type: ${formData.projectType}`,
      `Existing website: ${formData.hasWebsite === 'yes' ? formData.currentWebsiteUrl || 'Yes (URL not provided)' : 'No'}`,
      `Website goals: ${formData.goals.join(', ')}`,
      `Required features: ${formData.features.join(', ') || 'None specified'}`,
      `Budget: ${formData.budget}`,
      `Desired start date: ${formData.timeline}`,
    ].join('\n');

    window.location.href = `mailto:its.akarsh115e@gmail.com?subject=${encodeURIComponent(`New Project Enquiry — ${formData.businessName}`)}&body=${encodeURIComponent(message)}`;
    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <section id="contact" className={`site-section contact-section contact-section-${mode} relative overflow-hidden`}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="reveal text-center md:text-left">
            {mode === 'editorial' && (
              <div className="max-w-2xl">
                <h2 className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] text-cream mb-8">
                  Your email draft<br />is ready.
                </h2>
                <p className="text-lg text-taupe mb-8">Your email draft is ready — send it to complete your enquiry.</p>
                <div className="space-y-4 text-sm">
                  <p className="text-taupe/80"><strong>EMAIL</strong><br />its.akarsh115e@gmail.com</p>
                  <p className="text-taupe/80"><strong>WHATSAPP</strong><br /><a href="https://wa.me/919372725949" className="hover:text-cream transition-colors">+91 93727 25949</a></p>
                </div>
              </div>
            )}
            {mode === 'studio' && (
              <div>
                <h2 className="font-sans text-[clamp(2rem,6vw,5rem)] font-medium tracking-tight text-fg mb-6">
                  Email Draft Ready
                </h2>
                <p className="text-base text-text-secondary mb-8 max-w-xl">Your email draft is ready — send it to complete your enquiry.</p>
                <div className="grid grid-cols-2 gap-6 max-w-md text-sm">
                  <div>
                    <p className="text-text-secondary text-xs tracking-wide mb-2">EMAIL</p>
                    <p className="text-fg">its.akarsh115e@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs tracking-wide mb-2">WHATSAPP</p>
                    <p className="text-fg"><a href="https://wa.me/919372725949" className="hover:text-accent transition-colors">+91 93727 25949</a></p>
                  </div>
                </div>
              </div>
            )}
            {mode === 'raw' && (
              <div className="font-mono space-y-6">
                <p className="text-[1.2rem] font-bold">EMAIL DRAFT READY.</p>
                <p className="text-sm leading-relaxed">Your email draft is ready — send it to complete your enquiry.</p>
                <div className="border-t border-line pt-6 space-y-4 text-sm">
                  <p className="text-fg">EMAIL: its.akarsh115e@gmail.com</p>
                  <p className="text-fg">WHATSAPP: <a href="https://wa.me/919372725949" className="underline hover:text-accent transition-colors">+91 93727 25949</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={`site-section contact-section contact-section-${mode} relative overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-32">
        <div className="reveal mb-12">
          {mode === 'editorial' && (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-taupe/40" />
                <span className="text-[10px] tracking-editorial text-taupe/60">PROJECT ENQUIRY</span>
                <div className="w-12 h-px bg-taupe/40" />
              </div>
              <h2 className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] text-cream mb-4">
                Let's start<br />your project.
              </h2>
              <p className="text-taupe text-base max-w-xl">Tell me about your business and what you're looking to build. I'll get back to you within 24 hours.</p>
            </>
          )}
          {mode === 'studio' && (
            <>
              <h2 className="font-sans text-[clamp(2rem,6vw,5rem)] font-medium tracking-tight text-fg mb-4">
                Project Enquiry
              </h2>
              <p className="text-text-secondary text-base max-w-xl">Fill out the details below and I&apos;ll be in touch within 24 hours.</p>
            </>
          )}
          {mode === 'raw' && (
            <>
              <p className="font-mono text-xs tracking-wider text-fg mb-6">— PROJECT ENQUIRY FORM</p>
              <h2 className="font-sans font-bold text-[clamp(1.8rem,6vw,4rem)] tracking-tight text-fg mb-4 uppercase">
                Start Your Project
              </h2>
              <p className="text-fg/80 text-sm max-w-xl">Tell me about your business and requirements.</p>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className={`space-y-6 md:space-y-8 ${mode === 'raw' ? 'border border-line p-6 md:p-8' : ''}`}>
          {/* Name and Business */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className={`w-full px-4 py-3 border transition-colors ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
              />
            </div>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your business name"
                className={`w-full px-4 py-3 border transition-colors ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
              />
            </div>
          </div>

          {/* Business Type and Contact */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Business Type *</label>
              <input
                type="text"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="e.g. Clinic, Salon, Restaurant"
                className={`w-full px-4 py-3 border transition-colors ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
              />
            </div>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border transition-colors ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
              />
            </div>
          </div>

          {/* Project Type and Phone */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>What are you looking to build? *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border transition-colors appearance-none ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg focus:border-accent outline-none' : 'border-line bg-bg text-fg focus:border-accent outline-none font-mono text-sm'}`}
              >
                <option value="">Select project type</option>
                <option value="new">New Website</option>
                <option value="redesign">Redesign Existing Website</option>
                <option value="landing">Landing Page</option>
                <option value="portfolio">Portfolio Website</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`w-full px-4 py-3 border transition-colors ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
              />
            </div>
          </div>

          {/* Business Description */}
          <div className={`${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Tell me about your business *</label>
            <textarea
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              placeholder="What does your business do and who are your customers?"
              rows={4}
              className={`w-full px-4 py-3 border transition-colors resize-none ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
            />
          </div>

          {/* Website Goals */}
          <div className={`${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <label className={`block font-medium mb-4 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>What should the website help you achieve? * (Select all that apply)</label>
            <div className="space-y-3">
              {['Get more enquiries', 'Get bookings / appointments', 'Showcase my work', 'Showcase products / services', 'Build credibility', 'Generate leads', 'Provide information to customers'].map(goal => (
                <label key={goal} className={`flex items-center gap-3 cursor-pointer ${mode === 'editorial' ? 'text-cream' : mode === 'studio' ? 'text-fg' : 'text-fg font-mono text-sm'}`}>
                  <input
                    type="checkbox"
                    value={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={(e) => handleCheckbox(e, 'goals')}
                    className={`w-4 h-4 cursor-pointer ${mode === 'editorial' ? 'accent-cream' : mode === 'studio' ? 'accent-accent' : 'accent-accent'}`}
                  />
                  {goal}
                </label>
              ))}
            </div>
          </div>

          {/* Website Features */}
          <div className={`${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <label className={`block font-medium mb-4 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>What features do you need? (Select all that apply)</label>
            <div className="space-y-3">
              {['WhatsApp integration', 'Contact / enquiry form', 'Appointment / booking system', 'Instagram integration', 'Google Maps'].map(feature => (
                <label key={feature} className={`flex items-center gap-3 cursor-pointer ${mode === 'editorial' ? 'text-cream' : mode === 'studio' ? 'text-fg' : 'text-fg font-mono text-sm'}`}>
                  <input
                    type="checkbox"
                    value={feature}
                    checked={formData.features.includes(feature)}
                    onChange={(e) => handleCheckbox(e, 'features')}
                    className={`w-4 h-4 cursor-pointer ${mode === 'editorial' ? 'accent-cream' : mode === 'studio' ? 'accent-accent' : 'accent-accent'}`}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Existing Website */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Do you already have a website? *</label>
              <select
                name="hasWebsite"
                value={formData.hasWebsite}
                onChange={handleChange}
                className={`w-full px-4 py-3 border transition-colors appearance-none ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg focus:border-accent outline-none' : 'border-line bg-bg text-fg focus:border-accent outline-none font-mono text-sm'}`}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {formData.hasWebsite === 'yes' && (
              <div>
                <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Current website URL</label>
                <input
                  type="url"
                  name="currentWebsiteUrl"
                  value={formData.currentWebsiteUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className={`w-full px-4 py-3 border transition-colors ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream placeholder-taupe/40 focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg placeholder-text-secondary focus:border-accent outline-none' : 'border-line bg-bg text-fg placeholder-fg/40 focus:border-accent outline-none font-mono text-sm'}`}
                />
              </div>
            )}
          </div>

          {/* Budget and Timeline */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${mode === 'raw' ? 'border-b border-line pb-6' : ''}`}>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>Approximate Budget *</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full px-4 py-3 border transition-colors appearance-none ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg focus:border-accent outline-none' : 'border-line bg-bg text-fg focus:border-accent outline-none font-mono text-sm'}`}
              >
                <option value="">Select budget range</option>
                <option value="5-10k">₹5,000 – ₹10,000</option>
                <option value="10-15k">₹10,000 – ₹15,000</option>
                <option value="15-20k">₹15,000 – ₹20,000</option>
                <option value="20k+">₹20,000+</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label className={`block font-medium mb-2 ${mode === 'editorial' ? 'text-cream text-sm tracking-editorial' : mode === 'studio' ? 'text-fg text-sm font-medium' : 'text-fg text-xs uppercase tracking-wide font-mono'}`}>When would you like to get started? *</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className={`w-full px-4 py-3 border transition-colors appearance-none ${mode === 'editorial' ? 'border-taupe/30 bg-espresso/50 text-cream focus:border-cream outline-none' : mode === 'studio' ? 'border-line bg-surface text-fg focus:border-accent outline-none' : 'border-line bg-bg text-fg focus:border-accent outline-none font-mono text-sm'}`}
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="2weeks">Within 2 weeks</option>
                <option value="1month">Within a month</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>
          </div>

          {/* Payment Info */}
          <div className={`${mode === 'editorial' ? 'bg-taupe/10 px-6 py-4 border border-taupe/20' : mode === 'studio' ? 'bg-surface border border-line px-6 py-4' : 'border border-line px-4 py-3'}`}>
            <p className={`text-sm ${mode === 'editorial' ? 'text-taupe' : mode === 'studio' ? 'text-text-secondary' : 'text-fg/80 font-mono'}`}>
              <strong>Payment Structure:</strong> 50% upfront to begin the project and 50% upon completion.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className={`p-4 border ${mode === 'editorial' ? 'border-cream/30 bg-espresso/50 text-cream' : mode === 'studio' ? 'border-accent bg-surface/50 text-fg' : 'border-accent bg-bg text-fg font-mono text-sm'}`}>
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 font-medium transition-all duration-300 ${mode === 'editorial' ? 'bg-cream text-espresso hover:bg-cream/90 disabled:opacity-50' : mode === 'studio' ? 'bg-accent text-surface hover:bg-accent/90 disabled:opacity-50' : 'border border-line text-fg hover:bg-fg/5 disabled:opacity-50 font-mono uppercase text-sm tracking-wide'}`}
          >
            {isLoading ? 'Preparing email draft...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}
