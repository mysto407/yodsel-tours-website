'use client';

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import NavigationMenu from './components/NavigationMenu';
import DestinationsGrid from './components/DestinationsGrid';
import AboutSection from './components/AboutSection';
import MustSeePlaces from './components/MustSeePlaces';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import TourDetailsPage from './components/TourDetailsPage';
import Footer from './components/Footer';


import { destinations, tourDetails } from './data/tours';
import { Destination } from './types/tour';

// Define types for handlers to avoid using 'any'
interface Place {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  bestTime: string;
  category: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}

const TourismWebsite: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Destination | null>(null);


  // Menu handlers
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (item: string) => {
    // Close menu first
    setShowMenu(false);
    
    // If we're on a tour details page, go back to main first
    if (selectedTour) {
      setSelectedTour(null);
    }
    
    // Small delay to allow page transition before scrolling
    setTimeout(() => {
      // Handle navigation based on item
      switch(item) {
        case 'HOME':
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'TOURS':
          // Scroll to tours section
          const toursSection = document.querySelector('[data-section="tours"]');
          if (toursSection) {
            toursSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'ABOUT':
          // Scroll to about section
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'MUST SEE PLACES':
          // Scroll to must see places section
          const mustSeePlacesSection = document.querySelector('#must-see-places');
          if (mustSeePlacesSection) {
            mustSeePlacesSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'CONTACT':
          // Scroll to contact section
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
          case 'GALLERY':
            // Scroll to gallery section
            const gallerySection = document.querySelector('#gallery-preview');
            if (gallerySection) {
              gallerySection.scrollIntoView({ behavior: 'smooth' });
            }
            break;
        default:
          break;
      }
    }, selectedTour ? 100 : 0); // Only delay if we're coming from tour details
  };

  // Tour handlers
  const handleDestinationClick = (destination: Destination) => {
    if (showMenu) return; // Don't open tour details if menu is open
    setSelectedTour(destination);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToTours = () => {
    setSelectedTour(null);
    // Scroll to tours section
    setTimeout(() => {
      const toursSection = document.querySelector('[data-section="tours"]');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Hero section handlers
  const handleBookClick = () => {
    console.log('Book button clicked');
    // Scroll to tours section
    const toursSection = document.querySelector('[data-section="tours"]');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    console.log('Contact button clicked');
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Footer handlers
  const handleFooterLinkClick = (link: string) => {
    console.log(`Footer link clicked: ${link}`);
    // Implement footer navigation
  };

  // Must See Places handler
  const handlePlaceClick = (place: Place) => {
    console.log('Place clicked:', place);
    // Implement place detail view if needed
  };

  // Handler for when a tour is clicked from the Must See Places modal
  const handleTourClickFromPlace = (destination: Destination) => {
    console.log('Tour clicked from place modal:', destination);
    // Same behavior as clicking a tour card directly
    setSelectedTour(destination);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Contact form handler
  const handleContactFormSubmit = (formData: FormData) => {
    console.log('Contact form submitted:', formData);
    // Implement form submission logic (e.g., send to API)
  };

return (
  <div style={{ 
    fontFamily: 'var(--font-primary)',
    backgroundColor: 'var(--color-background)',
    position: 'relative',
    width: '100%',
    overflowX: 'hidden' // Add this back but only here
  }}>


      {/* Navigation Menu - Always visible */}
      <NavigationMenu 
        showMenu={showMenu}
        onToggleMenu={handleToggleMenu}
        onMenuItemClick={handleMenuItemClick}
      />

      {/* Conditional Content Based on Selected Tour */}
      {selectedTour ? (
        // Tour Details Page
        <>
          <TourDetailsPage 
            tour={selectedTour}
            tourDetails={tourDetails[selectedTour.tourId]}
            onBack={handleBackToTours}
          />
          <Footer onLinkClick={handleFooterLinkClick} />
        </>
      ) : (
        // Main Page Content
        <>
          {/* Hero Section */}
          <HeroSection 
            onBookClick={handleBookClick}
            onContactClick={handleContactClick}
          />

          {/* Destinations Grid */}
          <DestinationsGrid 
            destinations={destinations}
            onDestinationClick={handleDestinationClick}
          />

          {/* About Section */}
          <AboutSection 
            onContactClick={handleContactClick}
          />

          {/* Must See Places Section */}
          <MustSeePlaces 
            onPlaceClick={handlePlaceClick}
            onTourClick={handleTourClickFromPlace}
          />

          {/* Gallery Section */}
          <GallerySection />

          {/* Contact Section */}
          <ContactSection 
            onSubmit={handleContactFormSubmit}
          />

          

          {/* Footer */}
          <Footer onLinkClick={handleFooterLinkClick} />
        </>
      )}
    </div>
  );
};

export default TourismWebsite;