import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAtmosphere } from '@/context/AtmosphereContext';

const questions = [
  {
    question: 'HOW MUCH DOES A WEBSITE COST?',
    answer: 'Every website is different. Pricing generally ranges from ₹4,999–₹19,999 depending on the business, requirements, scope and budget. Any applicable offer or deal can also be taken into consideration.',
  },
  {
    question: 'HOW LONG DOES IT TAKE TO BUILD A WEBSITE?',
    answer: "You'll usually receive the first draft within 1–2 business days. Most websites are completed within around two weeks, depending on the project's requirements and the speed of feedback.",
  },
  {
    question: 'WHAT IS INCLUDED IN THE WEBSITE?',
    answer: 'Your website is designed around your business and its requirements. Depending on the project, this can include features such as WhatsApp integration, Instagram integration, Google Maps and contact forms.',
  },
  {
    question: 'HOW MANY REVISIONS DO I GET?',
    answer: 'Two rounds of revisions are included in the project. This gives you the opportunity to review the website and request changes while keeping the development process focused and efficient.',
  },
  {
    question: 'DO YOU PROVIDE THE DOMAIN AND HOSTING?',
    answer: "Domain and hosting are purchased directly by the client so that you retain ownership of these services. I'll help you connect and set everything up for the website.",
  },
  {
    question: 'WHAT DO I NEED TO PROVIDE TO GET STARTED?',
    answer: "Ideally, you'll provide your logo, photos, business information, services and other content you'd like on the website. If you need help creating or sourcing content, that can be arranged for an additional charge.",
  },
  {
    question: 'WHAT HAPPENS AFTER MY WEBSITE IS LAUNCHED?',
    answer: 'After launch, you get one month of free changes. After that, additional updates or ongoing maintenance can be requested for a separate fee based on the work required.',
  },
  {
    question: 'CAN YOU BUILD A WEBSITE FOR MY TYPE OF BUSINESS?',
    answer: 'Yes. Websites can be built for businesses and professionals across different industries. The design, content and functionality are tailored around what your particular business needs.',
  },
] as const;

export default function FAQ() {
  const { mode } = useAtmosphere();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`site-section faq-section faq-section-${mode} grain`}>
      <div className="section-shell">
        <div className="faq-intro reveal">
          <div className="faq-kicker eyebrow">
            <span className="faq-kicker-line" />
            BEFORE WE BEGIN
          </div>
          <h2>Good questions.<br /><em>Clear answers.</em></h2>
          <p>Everything you need to know before starting a website project together.</p>
        </div>

        <div className="faq-list" aria-label="Frequently asked questions">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;
            return (
              <div className={`faq-item reveal${isOpen ? ' is-open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-number mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{item.question}</span>
                  <ChevronDown className="faq-icon" aria-hidden="true" />
                </button>
                <div id={answerId} className="faq-answer" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="faq-payment mono">PAYMENT STRUCTURE <span>50% upfront to begin the project + 50% upon completion.</span></p>
      </div>
    </section>
  );
}
