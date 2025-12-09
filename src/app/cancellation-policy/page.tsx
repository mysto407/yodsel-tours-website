'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../privacy-policy/page.module.css';

export default function CancellationPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h1 className={styles.title}>Cancellation Policy</h1>
        <p className={styles.lastUpdated}>Last updated: December 2024</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Overview</h2>
          <p>
            We understand that plans can change. This Cancellation Policy outlines the terms and
            conditions for cancellations, refunds, and modifications to your booking with
            Yodsel Tours & Treks.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Cancellation by Client</h2>
          <p>
            If you need to cancel your booking, the following cancellation fees will apply based on
            when we receive your written cancellation notice:
          </p>
          <ul>
            <li><strong>60+ days before departure:</strong> Full refund minus $100 administrative fee per person</li>
            <li><strong>45-59 days before departure:</strong> 25% of total tour cost</li>
            <li><strong>30-44 days before departure:</strong> 50% of total tour cost</li>
            <li><strong>15-29 days before departure:</strong> 75% of total tour cost</li>
            <li><strong>14 days or less before departure:</strong> 100% of total tour cost (no refund)</li>
          </ul>
          <p>
            <strong>Note:</strong> The Sustainable Development Fee (SDF) is refundable if cancelled
            before the visa is issued. Once the visa is processed, the SDF is non-refundable per
            Bhutan government regulations.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Cancellation by Yodsel Tours & Treks</h2>
          <p>
            We reserve the right to cancel a tour under the following circumstances:
          </p>
          <ul>
            <li>Insufficient number of participants for group tours</li>
            <li>Force majeure events (natural disasters, political unrest, pandemics)</li>
            <li>Government travel restrictions or advisories</li>
            <li>Safety concerns</li>
          </ul>
          <p>
            In such cases, you will be offered the choice of:
          </p>
          <ul>
            <li>A full refund of all payments made</li>
            <li>Credit towards a future tour of equal value</li>
            <li>An alternative tour of similar value</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Modifications to Booking</h2>
          <p>
            If you wish to modify your booking (change dates, itinerary, or number of travelers):
          </p>
          <ul>
            <li><strong>More than 45 days before departure:</strong> One free modification allowed (subject to availability)</li>
            <li><strong>30-44 days before departure:</strong> $50 modification fee per person</li>
            <li><strong>Less than 30 days before departure:</strong> Treated as cancellation and rebooking; standard cancellation fees apply</li>
          </ul>
          <p>
            Any price differences due to changes in travel dates or services will be charged or refunded accordingly.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. No-Show Policy</h2>
          <p>
            If you fail to arrive for your scheduled tour without prior notice ("no-show"), no refund
            will be provided. This includes:
          </p>
          <ul>
            <li>Missing your international flight to Bhutan</li>
            <li>Failure to obtain required travel documents</li>
            <li>Denied entry due to visa or passport issues</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Early Departure</h2>
          <p>
            If you choose to leave a tour early for any reason:
          </p>
          <ul>
            <li>No refund will be provided for unused services</li>
            <li>Any additional costs incurred (transportation, accommodation) will be your responsibility</li>
            <li>The SDF for remaining nights is non-refundable once the tour has commenced</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Refund Process</h2>
          <ul>
            <li>All cancellation requests must be submitted in writing via email to bhutanyodsel@gmail.com</li>
            <li>Refunds will be processed within 14-21 business days of receiving your cancellation request</li>
            <li>Refunds will be made using the same payment method as the original transaction</li>
            <li>Bank transfer fees or currency conversion differences may apply and will be deducted from the refund</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Travel Insurance</h2>
          <p>
            We strongly recommend purchasing comprehensive travel insurance that includes trip
            cancellation coverage. This can protect you from financial loss due to unforeseen
            circumstances such as:
          </p>
          <ul>
            <li>Medical emergencies</li>
            <li>Family emergencies</li>
            <li>Natural disasters</li>
            <li>Travel delays or interruptions</li>
          </ul>
          <p>
            Please ensure your insurance policy covers the full cost of your trip.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Force Majeure</h2>
          <p>
            Neither party shall be liable for any failure to perform due to circumstances beyond
            reasonable control, including but not limited to:
          </p>
          <ul>
            <li>Natural disasters (earthquakes, floods, landslides)</li>
            <li>Severe weather conditions</li>
            <li>War, terrorism, or civil unrest</li>
            <li>Epidemics or pandemics</li>
            <li>Government actions or travel restrictions</li>
            <li>Airline cancellations or strikes</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>10. Group Bookings</h2>
          <p>
            For group bookings (6 or more travelers), special cancellation terms may apply.
            Please contact us directly for group booking terms and conditions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>For cancellation requests or questions about this policy:</p>
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
