'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mountain, MapPin, Clock, Users, ArrowRight, Calendar, Mail, Phone, User } from 'lucide-react';
import { Destination, TourDetails } from '../types/tour';
import styles from './TourDetailsPage.module.css';


interface TourDetailsPageProps {
  tour: Destination;
  tourDetails: TourDetails;
  onBack: () => void;
}

const TourDetailsPage: React.FC<TourDetailsPageProps> = ({ 
  tour, 
  tourDetails, 
  onBack 
}) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    startDate: '',
    message: ''
  });

  // Handle browser back button
  useEffect(() => {
    // Push a state when component mounts
    window.history.pushState({ page: 'tour-details' }, '');

    const handlePopState = () => {
      onBack();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);

  const handleBookingClick = () => {
    setShowBookingForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Booking Request: ${tour.name} - Yodsel Tours`,
          from_name: 'Yodsel Tours Website',
          tour_name: tour.name,
          tour_option: tourDetails.options[selectedOption]?.name || 'Standard',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          travelers: formData.travelers,
          start_date: formData.startDate,
          message: formData.message || 'No additional message',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => onBack(), 2000);
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
    <div className={styles.pageContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.container}>
          <button
            onClick={onBack}
            className={styles.backButton}
            aria-label="Back to tours"
          >
            <ArrowLeft size={20} />
            Back to Tours
          </button>
          
          <div className={styles.headerContent}>
            <div className={styles.tourCode}>
              {tour.code}
            </div>
            <h1 className={styles.tourTitle}>
              {tour.name}
            </h1>
            <div className={styles.tourMeta}>
              <span>{tour.country}</span>
              <span className={styles.metaSeparator}>•</span>
              <span>{tour.coordinates}</span>
            </div>
            <div className={styles.tourHighlights}>
              <span>{tour.highlights}</span>
            </div>
            <div className={styles.tourAltitude}>
              <Mountain size={16} />
              <span>Max Altitude: {tour.maxAltitude}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          {!showBookingForm ? (
            <div className={styles.contentWrapper}>
              {/* Left Column - Main Content */}
              <div className={styles.tourContent}>
                {/* Overview Section */}
                {tourDetails.overview && (
                  <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Overview</h2>
                    <p className={styles.overviewText}>{tourDetails.overview}</p>
                  </div>
                )}

                {/* Tour Inclusions Section */}
                {tourDetails.inclusions && tourDetails.inclusions.length > 0 && (
                  <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Tour Inclusions</h2>
                    <ul className={styles.inclusionsList}>
                      {tourDetails.inclusions.map((item, index) => (
                        <li key={index} className={styles.inclusionItem}>
                          <span className={styles.checkIcon}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Itinerary */}
                <div className={styles.option}>
                  <h2 className={styles.sectionTitle}>Day-by-Day Itinerary</h2>
                  {/* Tour Options Selection */}
                {tourDetails.options.length > 1 && (
                  <div className={styles.optionSelector}>
                    <div className={styles.optionLabel}>Select Tour Option:</div>
                    <div className={styles.optionButtons}>
                      {tourDetails.options.map((option, index) => (
                        <button
                          key={index}
                          className={`${styles.optionButton} ${selectedOption === index ? styles.optionButtonActive : ''}`}
                          onClick={() => setSelectedOption(index)}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                  {tourDetails.options.length > 1 && (
                    <div className={styles.optionTitle}>
                      {tourDetails.options[selectedOption].name}
                    </div>
                  )}
                  
                  <div className={styles.itinerary}>
                    {tourDetails.options[selectedOption].itinerary.map((day, dayIndex) => (
                      <div key={dayIndex} className={styles.dayCard}>
                        <div className={styles.dayContent}>
                          {/* Day Number */}
                          <div className={styles.dayNumber}>
                            <div className={styles.dayText}>
                              {day.day}
                            </div>
                          </div>

                          {/* Day Details */}
                          <div className={styles.dayDetails}>
                            <h3 className={styles.dayTitle}>
                              {day.title}
                            </h3>
                            
                            {/* Metadata */}
                            <div className={styles.dayMeta}>
                              {day.altitude && (
                                <div className={styles.metaItem}>
                                  <Mountain size={14} />
                                  <span>{day.altitude}</span>
                                </div>
                              )}
                              {day.distance && (
                                <div className={styles.metaItem}>
                                  <MapPin size={14} />
                                  <span>{day.distance}</span>
                                </div>
                              )}
                              {day.duration && (
                                <div className={styles.metaItem}>
                                  <Clock size={14} />
                                  <span>{day.duration}</span>
                                </div>
                              )}
                              {day.difficulty && (
                                <div className={styles.metaItem}>
                                  <Users size={14} />
                                  <span>{day.difficulty}</span>
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            {day.description && (
                              <p className={styles.dayDescription}>
                                {day.description}
                              </p>
                            )}

                            {/* Highlights */}
                            {day.highlights && (
                              <div className={styles.highlights}>
                                <div className={styles.highlightsLabel}>
                                  Highlights:
                                </div>
                                <div className={styles.highlightsTags}>
                                  {day.highlights.map((highlight, hIndex) => (
                                    <span key={hIndex} className={styles.highlightTag}>
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Information Section */}
                {tourDetails.importantInfo && tourDetails.importantInfo.length > 0 && (
                  <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Important Information</h2>
                    <ul className={styles.importantList}>
                      {tourDetails.importantInfo.map((item, index) => (
                        <li key={index} className={styles.importantItem}>
                          <span className={styles.bulletIcon}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Sticky Booking Card */}
              <div className={styles.sidebarWrapper}>
                <div className={styles.bookingSection}>
                  <button
                    className={styles.bookingButton}
                    onClick={handleBookingClick}
                  >
                    BOOK THIS EXPEDITION
                    <ArrowRight className={styles.bookingIcon} size={16} />
                  </button>
                </div>
              </div>

              {/* Mobile Booking Card (shows at bottom on mobile) */}
              <div className={styles.mobileBookingSection}>
                <button
                  className={styles.bookingButton}
                  onClick={handleBookingClick}
                >
                  BOOK THIS EXPEDITION
                  <ArrowRight className={styles.bookingIcon} size={16} />
                </button>
              </div>
            </div>
          ) : (
            // Booking Form
            <div className={styles.bookingFormContainer}>
              <div className={styles.bookingFormTitle}>
                Complete Your Booking
              </div>
              <form onSubmit={handleSubmitBooking} className={styles.bookingForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <Phone size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <Users size={16} />
                      Number of Travelers *
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <Calendar size={16} />
                      Preferred Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      className={styles.formTextarea}
                      placeholder="Any special requests or questions?"
                      rows={4}
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Thank you for your booking request! We will contact you shortly. Redirecting...
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <div className={styles.formActions}>
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className={styles.formButtonSecondary}
                    disabled={isSubmitting || submitStatus === 'success'}
                  >
                    Back to Details
                  </button>
                  <button
                    type="submit"
                    className={styles.formButtonPrimary}
                    disabled={isSubmitting || submitStatus === 'success'}
                  >
                    {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Sent!' : 'Submit Booking Request'}
                    {!isSubmitting && submitStatus !== 'success' && <ArrowRight size={16} />}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;