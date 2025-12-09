'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: December 2024</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Yodsel Tours & Treks. We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and postal address when you make a booking or inquiry.</li>
            <li><strong>Travel Information:</strong> Travel dates, destinations of interest, group size, and special requirements.</li>
            <li><strong>Payment Information:</strong> Credit card details and billing information (processed securely through our payment providers).</li>
            <li><strong>Communication Data:</strong> Messages, feedback, and correspondence you send to us.</li>
            <li><strong>Passport Information:</strong> Passport details required for visa processing and tour arrangements in Bhutan.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and manage your tour bookings</li>
            <li>Arrange visas, permits, and travel documentation for Bhutan</li>
            <li>Communicate with you about your bookings and inquiries</li>
            <li>Send you travel updates and important information about your trip</li>
            <li>Process payments and prevent fraud</li>
            <li>Improve our services and website experience</li>
            <li>Send promotional offers (only with your consent)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Tourism Council of Bhutan:</strong> For visa processing and travel permits as required by Bhutanese law.</li>
            <li><strong>Hotels and Service Providers:</strong> To arrange accommodations, transportation, and activities.</li>
            <li><strong>Payment Processors:</strong> To securely process your payments.</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal information against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes
            for which it was collected, including to satisfy legal, accounting, or reporting requirements.
            Booking records are typically retained for 7 years for tax and legal purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies are small
            files stored on your device that help us understand how you use our website. You can
            control cookie settings through your browser preferences.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for
            the privacy practices of these external sites. We encourage you to read their privacy
            policies before providing any personal information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className={styles.contactInfo}>
            <p><strong>Yodsel Tours & Treks</strong></p>
            <p>Thimphu, Bhutan</p>
            <p>Email: bhutanyodsel@gmail.com</p>
            <p>Phone: +975 17 127 071</p>
          </div>
        </section>
      </div>

      <div className={styles.footer}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
