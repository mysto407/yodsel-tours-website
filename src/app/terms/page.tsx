'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../privacy-policy/page.module.css';

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.lastUpdated}>Last updated: December 2024</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the services provided by Yodsel Tours & Treks
            ("we," "us," or "our"). By booking a tour or using our services, you agree to be bound by
            these terms. Please read them carefully before making a booking.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Booking and Confirmation</h2>
          <ul>
            <li>All bookings are subject to availability and confirmation by Yodsel Tours & Treks.</li>
            <li>A booking is confirmed only upon receipt of the required deposit and written confirmation from us.</li>
            <li>You must provide accurate passport and personal details at the time of booking for visa processing.</li>
            <li>Any errors in personal information may result in visa rejection or additional charges.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Bhutan Travel Requirements</h2>
          <p>
            All international tourists visiting Bhutan must comply with the following requirements:
          </p>
          <ul>
            <li><strong>Sustainable Development Fee (SDF):</strong> USD $100 per person per night, payable in advance.</li>
            <li><strong>Visa:</strong> All tourists require a visa, which we will arrange on your behalf.</li>
            <li><strong>Licensed Tour Operator:</strong> All tourists must book through a licensed Bhutanese tour operator (that's us!).</li>
            <li><strong>Minimum Daily Package:</strong> Includes accommodation, meals, transportation, guide, and internal permits.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Payment Terms</h2>
          <ul>
            <li><strong>Deposit:</strong> A 30% deposit is required at the time of booking to secure your reservation.</li>
            <li><strong>Full Payment:</strong> The remaining balance must be paid at least 30 days before the tour start date.</li>
            <li><strong>Payment Methods:</strong> We accept bank transfers and major credit cards.</li>
            <li><strong>Currency:</strong> All prices are quoted in USD unless otherwise specified.</li>
            <li>Payments must be received in full before visa processing can begin.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Tour Inclusions</h2>
          <p>Unless otherwise specified, our tour packages typically include:</p>
          <ul>
            <li>Accommodation in 3-star hotels or equivalent (upgrades available)</li>
                        <li>Licensed English-speaking guide</li>
            <li>Private vehicle with driver</li>
            <li>All internal permits and entry fees</li>
            <li>Visa arrangement and processing</li>
            <li>Sustainable Development Fee</li>
            <li>Mineral water during tours</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Tour Exclusions</h2>
          <p>The following are typically not included:</p>
          <ul>
                        <li>Travel insurance (strongly recommended)</li>
            <li>Personal expenses (laundry, phone calls, tips)</li>
            <li>Alcoholic beverages</li>
            <li>Camera/video fees at monuments (where applicable)</li>
            <li>Any services not specifically mentioned in inclusions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Travel Insurance</h2>
          <p>
            We strongly recommend that all travelers obtain comprehensive travel insurance covering:
          </p>
          <ul>
            <li>Trip cancellation and interruption</li>
            <li>Medical expenses and emergency evacuation</li>
            <li>Lost or delayed baggage</li>
            <li>Personal liability</li>
          </ul>
          <p>
            Bhutan's terrain can be challenging, and medical facilities are limited. Emergency
            evacuation insurance is particularly important for trekking tours.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Health and Fitness</h2>
          <ul>
            <li>Many areas in Bhutan are at high altitude (2,000-5,000 meters). Please consult your doctor before traveling.</li>
            <li>You must inform us of any medical conditions, dietary requirements, or mobility issues at the time of booking.</li>
            <li>Trekking tours require a reasonable level of fitness. We reserve the right to assess suitability.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Itinerary Changes</h2>
          <p>
            While we make every effort to operate tours as planned, we reserve the right to modify
            itineraries due to:
          </p>
          <ul>
            <li>Weather conditions</li>
            <li>Road conditions or closures</li>
            <li>Government regulations or restrictions</li>
            <li>Local festivals or events</li>
            <li>Force majeure circumstances</li>
          </ul>
          <p>
            We will always try to provide suitable alternatives of equal or greater value.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Client Responsibilities</h2>
          <ul>
            <li>Respect local customs, traditions, and dress codes (especially at religious sites)</li>
            <li>Follow instructions from guides regarding safety and cultural etiquette</li>
            <li>Carry valid travel documents at all times</li>
            <li>Arrive on time for scheduled activities</li>
            <li>Not engage in any illegal activities</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>11. Limitation of Liability</h2>
          <p>
            Yodsel Tours & Treks acts as an agent for hotels, airlines, and other service providers.
            We are not liable for any injury, damage, loss, delay, or irregularity caused by:
          </p>
          <ul>
            <li>Third-party service providers</li>
            <li>Weather, natural disasters, or acts of God</li>
            <li>Government actions or civil unrest</li>
            <li>Client's own actions or negligence</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of the Kingdom of Bhutan.
            Any disputes shall be subject to the exclusive jurisdiction of the courts of Bhutan.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Contact Us</h2>
          <p>For any questions regarding these Terms and Conditions:</p>
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
