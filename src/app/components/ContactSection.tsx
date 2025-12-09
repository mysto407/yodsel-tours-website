'use client';

import React, { useState } from 'react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Inquiry from ${formData.name} - Yodsel Tours`,
          from_name: 'Yodsel Tours Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          destination: formData.destination || 'Not specified',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        if (onSubmit) {
          onSubmit(formData);
        }
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            destination: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.statusIndicator}>
            <span className={styles.statusLine}></span>
            <span className={styles.statusText}>GET IN TOUCH</span>
          </div>
          <h2 className={styles.sectionTitle}>
            START YOUR<br />
            ADVENTURE
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>PLAN YOUR JOURNEY</h3>
              <p className={styles.formSubtitle}>
                Share your expedition dreams with us. We&apos;ll craft a personalized 
                adventure that exceeds expectations.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      PHONE
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="destination" className={styles.label}>
                      INTERESTED IN
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a destination</option>
                      <option value="druk-path">TIGER&apos;S SANCTUARY QUEST</option>
                      <option value="paro-valley">HIMALAYAN THRONE JOURNEY</option>
                      <option value="bumthang">FORBIDDEN VALLEY EXPEDITION</option>
                      <option value="punakha">CRANE VALLEY ODYSSEY</option>
                      <option value="custom">Custom Tour</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className={styles.textarea}
                    placeholder="Tell us about your dream adventure..."
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting || submitStatus === 'success'}
                >
                  {isSubmitting ? 'SENDING...' : submitStatus === 'success' ? '✓ SENT!' : 'SEND INQUIRY'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info - Creative Display */}
          <div className={styles.infoContainer}>
            <div className={styles.creativeContact}>
              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>CALL US</div>
                <a href="tel:+975127071" className={styles.contactMainText}>
                  +975 127 071
                </a>
                <a href="tel:+97517110692" className={styles.contactSecondaryText}>
                  +975 17 110 692
                </a>
              </div>

              <div className={styles.dividerLine}></div>

              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>EMAIL</div>
                <a href="mailto:bhutanyodsel@gmail.com" className={styles.contactMainText}>
                bhutanyodsel@gmail.com
                </a>
              </div>

              <div className={styles.dividerLine}></div>

              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>VISIT</div>
                <div className={styles.contactMainText}>
                  Thimphu
                </div>
                <div className={styles.contactSecondaryText}>
                  Clock Tower Square<br/>
                  Thimphu, Bhutan
                </div>
              </div>

              <div className={styles.dividerLine}></div>

              <div className={styles.contactBlock}>
                <div className={styles.contactLabel}>FOLLOW</div>
                <div className={styles.socialLinks}>
                  <a href="https://instagram.com/yodseltours" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com/yodseltours" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </a>
                  <a href="https://wa.me/97517123456" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={styles.decorativeCorner}>
                <svg viewBox="0 0 100 100" className={styles.cornerSvg}>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;