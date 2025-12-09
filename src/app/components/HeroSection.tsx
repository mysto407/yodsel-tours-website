import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  onBookClick?: () => void;
  onContactClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  onBookClick, 
  onContactClick 
}) => {
  return (
    <section className={styles.heroSection}>
      {/* Left Side - Content */}
      <div className={styles.contentSide}>
        <div className={styles.contentContainer}>
          <div className={styles.headerGroup}>
            <div className={styles.establishedText}>
              SINCE 1998
            </div>
            <h1 className={styles.mainTitle}>
              YODSEL<br/> TOURS<br/>  AND <br/> TREKS
            </h1>
          </div>
          
          <div className={styles.descriptionGroup}>
            <p className={styles.description}>
              Venture beyond the ordinary. Discover untouched landscapes, 
              extreme adventures, and experiences that redefine what&apos;s possible.
            </p>
            
            <div className={styles.statusIndicator}>
              <span className={styles.statusLine}></span>
              <span className={styles.statusText}>EXPEDITION READY</span>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button 
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={onBookClick}
            >
              BOOK
            </button>
            <button 
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={onContactClick}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className={styles.visualSide}>
        <div className={styles.heroImage}>
          <Image
            src="/5.jpg"
            alt="Bhutan mountain landscape with traditional architecture"
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;