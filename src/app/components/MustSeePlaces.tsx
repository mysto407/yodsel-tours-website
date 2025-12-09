import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
import styles from './MustSeePlaces.module.css';
import PlaceDetailsModal from './PlaceDetailsModal';
import { places } from '../data/places';
import { Destination, Place } from '../types/tour';

interface MustSeePlacesProps {
  onPlaceClick?: (place: Place) => void;
  onTourClick?: (destination: Destination) => void;
}

const MustSeePlaces: React.FC<MustSeePlacesProps> = ({ 
  onPlaceClick,
  onTourClick 
}) => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
    
    if (onPlaceClick) {
      onPlaceClick(place);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
  };

  const handleTourClick = (destination: Destination) => {
    setIsModalOpen(false);
    setSelectedPlace(null);
    
    if (onTourClick) {
      onTourClick(destination);
    }
  };

  // Helper function to get a short excerpt for the card preview
  const getShortDescription = (fullDescription: string): string => {
    // Split by sentence endings, but avoid splitting on decimal points
    const sentences = fullDescription.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [];
    if (sentences.length > 0 && sentences[0]) {
      return sentences[0].trim();
    }
    // Fallback: return first 120 characters
    return fullDescription.substring(0, 120) + '...';
  };


  return (
    <>
      <section className={styles.mustSeePlacesSection} id="must-see-places">
        {/* Dynamic Background */}
             
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerTop}>
              <div className={styles.subtitle}>
                <div className={styles.subtitleLine}></div>
                <span className={styles.subtitleText}>DISCOVER BHUTAN</span>
              </div>
            </div>
            <h2 className={styles.title}>MUST SEE PLACES</h2>
            <p className={styles.description}>
              Explore the most breathtaking destinations that make the Kingdom of the Thunder Dragon a paradise for travelers
            </p>
          </div>

          {/* Places Grid */}
          <div className={styles.placesGrid}>
            {places.map((place) => (
              <div
                key={place.id}
                className={styles.placeCard}
                onClick={() => handlePlaceClick(place)}
              >
                {/* Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.placeImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.category}>{place.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.placeContent}>
                  <div className={styles.placeHeader}>
                    <h3 className={styles.placeName}>{place.name}</h3>
                  </div>

                  <div className={styles.placeLocation}>
                    <MapPin size={14} />
                    <span>{place.location}</span>
                  </div>

                  <p className={styles.placeDescription}>
                    {getShortDescription(place.description)}
                  </p>

                  <div className={styles.placeFooter}>
                    <div className={styles.bestTime}>
                      <Clock size={14} />
                      <span>{place.bestTime}</span>
                    </div>
                    <button className={styles.exploreButton}>
                      Explore
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.arrowIcon}
                      >
                        <path
                          d="M1 8H15M15 8L8 1M15 8L8 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Place Details Modal */}
      <PlaceDetailsModal
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onTourClick={handleTourClick}
      />
    </>
  );
};

export default MustSeePlaces;