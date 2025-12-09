import React, { useState } from 'react';
import Image from 'next/image';
import { X, MapPin, Star, Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './PlaceDetailsModal.module.css';
import { destinations } from '../data/tours';
import { placeToursMapping } from '../data/placeToursMapping';
import { Destination } from '../types/tour'; // Assuming this is the correct path for the type

interface Place {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  bestTime: string;
  category: string;
}

interface PlaceDetailsModalProps {
  place: Place | null;
  isOpen: boolean;
  onClose: () => void;
  onTourClick?: (destination: Destination) => void;
}

const PlaceDetailsModal: React.FC<PlaceDetailsModalProps> = ({
  place,
  isOpen,
  onClose,
  onTourClick
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen || !place) return null;

  const relatedTourCodes = placeToursMapping[place.id] || [];
  const relatedTours = destinations.filter(dest => 
    relatedTourCodes.includes(dest.code)
  );

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTourClick = (destination: Destination) => {
    if (onTourClick) {
      onTourClick(destination);
    }
  };

  // Split description into sentences for better formatting
  const sentences = place.description.match(/[^.!?]+[.!?]+/g) || [place.description];
  const previewLength = 3; // Number of sentences to show in preview
  const needsExpansion = sentences.length > previewLength;
  
  const displayText = isExpanded || !needsExpansion
    ? place.description
    : sentences.slice(0, previewLength).join(' ') + '...';

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.imageContainer}>
            <Image
              src={place.image}
              alt={place.name}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.placeImage}
            />
            <div className={styles.categoryBadge}>
              {place.category}
            </div>
          </div>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.placeInfo}>
            <h2 className={styles.placeName}>{place.name}</h2>
            
            <div className={styles.placeMetaRow}>
              <div className={styles.metaItem}>
                <MapPin size={16} />
                <span>{place.location}</span>
              </div>

              <div className={styles.metaItem}>
                <Clock size={16} />
                <span>Best Time: {place.bestTime}</span>
              </div>
            </div>

            <div className={styles.descriptionWrapper}>
              <p className={styles.placeDescription}>{displayText}</p>
              
              {needsExpansion && (
                <button 
                  className={styles.readMoreButton}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {relatedTours.length > 0 && (
            <>
              <div className={styles.divider}></div>

              <div className={styles.toursSection}>
                <h3 className={styles.toursTitle}>
                  Tours Covering This Place
                </h3>
                <p className={styles.toursSubtitle}>
                  This destination is included in {relatedTours.length} tour {relatedTours.length === 1 ? 'package' : 'packages'}
                </p>

                <div className={styles.toursList}>
                  {relatedTours.map((tour) => (
                    <div 
                      key={tour.id} 
                      className={styles.tourCard}
                      onClick={() => handleTourClick(tour)}
                    >
                      <div className={styles.tourImageWrapper}>
                        <Image
                          src={tour.image}
                          alt={tour.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className={styles.tourImage}
                        />
                      </div>
                      
                      <div className={styles.tourInfo}>
                        <div className={styles.tourHeader}>
                          <div>
                            <div className={styles.tourCode}>{tour.code}</div>
                            <h4 className={styles.tourName}>{tour.name}</h4>
                            <div className={styles.tourCountry}>{tour.country}</div>
                          </div>
                          <div className={styles.tourPrice}>{tour.price}</div>
                        </div>

                        <div className={styles.tourFooter}>
                          <div className={styles.tourMeta}>
                            <span className={styles.tourMetaItem}>
                              {tour.difficulty}
                            </span>
                            <span className={styles.tourMetaItem}>
                              {tour.season}
                            </span>
                          </div>
                          
                          <button className={styles.viewTourButton}>
                            View Tour
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailsModal;