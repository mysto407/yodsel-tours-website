import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import DynamicBackground from './DynamicBackground';

interface FooterProps {
  onLinkClick?: (link: string) => void;
}

const footerLinks = ['ABOUT', 'TOURS', 'GALLERY', 'BLOG', 'CONTACT'];

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const handleLinkClick = (link: string) => {
    // Handle BLOG link separately - navigate to /blog page
    if (link === 'BLOG') {
      window.location.href = '/blog';
      return;
    }

    // Map footer links to section IDs
    const sectionMap: { [key: string]: string } = {
      'ABOUT': 'about',
      'TOURS': 'tours',
      'GALLERY': 'gallery-preview',
      'CONTACT': 'contact'
    };

    const sectionId = sectionMap[link];

    if (sectionId) {
      const element = document.querySelector(`#${sectionId}`) ||
                     document.querySelector(`[data-section="${sectionId}"]`);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    // Also call the onLinkClick prop if provided
    if (onLinkClick) {
      onLinkClick(link);
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Dynamic Background - Subtle for Footer */}
      <DynamicBackground 
        variant="subtle" 
        animationSpeed="slow" 
        blurIntensity="light" 
        noiseIntensity="subtle" 
      />
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.content}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <div className={styles.brand}>
              <div className={styles.terminalText}>
                YODSEL TOURS & TREKS
              </div>
              <div className={styles.versionText}>
                Est. 1992 | Licensed Tour Operator
              </div>
            </div>

            
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <a href="mailto:bhutanyodsel@gmail.com" className={styles.contactItem}>
                <Mail size={16} />
                <span>bhutanyodsel@gmail.com</span>
              </a>
              <a href="tel:+97521234567" className={styles.contactItem}>
                <Phone size={16} />
                <span>+975 17 127 071</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>Thimphu, Bhutan</span>
              </div>
            </div>
          </div>

          {/* Background Logo */}
          <div className={styles.backgroundLogo}>
            <Image
              src="/ytatLogoOG_HD_Cream-removebg-preview.png"
              alt="Yodsel Tours and Treks Logo"
              width={300}
              height={300}
              className={styles.footerLogo}
            />
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <nav className={styles.footerNav}>
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link)}
                  className={styles.footerLink}
                  aria-label={`Maps to ${link}`}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          

          {/* Social */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/17Y3kcqkjE/?mibextid=wwXIfr" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.facebook.com/share/17Y3kcqkjE/?mibextid=wwXIfr" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/97517127071?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20tours" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Partner Hotels */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Partner Hotels</h3>
            <nav className={styles.footerNav}>
              <a href="https://tigersnestresort.com/" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                Tiger&apos;s Nest Resort
              </a>
              <a href="https://hotelsamye.com/" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                Hotel Samye
              </a>
            </nav>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className={styles.certifications}>
          <div className={styles.certItem}>
            <div className={styles.certBadge}>🏔️</div>
            <span>Licensed by Tourism Council of Bhutan</span>
          </div>
          <div className={styles.certItem}>
            <div className={styles.certBadge}>✓</div>
            <span>33+ Years Experience</span>
          </div>
          <div className={styles.certItem}>
            <div className={styles.certBadge}>★</div>
            <span>3200+ Happy Travelers</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Yodsel Tours & Treks. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.legalSeparator}>•</span>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
            <span className={styles.legalSeparator}>•</span>
            <Link href="/cancellation-policy" className={styles.legalLink}>Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;