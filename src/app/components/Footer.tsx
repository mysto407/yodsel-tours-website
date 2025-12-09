import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';
import DynamicBackground from './DynamicBackground';

interface FooterProps {
  onLinkClick?: (link: string) => void;
}

const footerLinks = ['ABOUT', 'TOURS', 'GALLERY', 'CONTACT'];

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const handleLinkClick = (link: string) => {
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
                Est. 1998 | Licensed Tour Operator
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

            {/* Social Media */}
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/yodseltours" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/yodseltours" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/yodseltours" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
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
            <span>26+ Years Experience</span>
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
            <button className={styles.legalLink}>Privacy Policy</button>
            <span className={styles.legalSeparator}>•</span>
            <button className={styles.legalLink}>Terms & Conditions</button>
            <span className={styles.legalSeparator}>•</span>
            <button className={styles.legalLink}>Cancellation Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;