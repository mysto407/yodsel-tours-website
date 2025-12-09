import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { Destination } from '../types/tour';
import styles from './DestinationsGrid.module.css';

interface DestinationsGridProps {
  destinations: Destination[];
  onDestinationClick: (destination: Destination) => void;
}

const DestinationsGrid: React.FC<DestinationsGridProps> = ({ 
  destinations, 
  onDestinationClick 
}) => {
  const [activeDestination, setActiveDestination] = useState<number | null>(null);

  const handleDestinationClick = (destination: Destination) => {
    onDestinationClick(destination);
  };

  const handleMouseEnter = (index: number) => {
    setActiveDestination(index);
  };

  const handleMouseLeave = () => {
    setActiveDestination(null);
  };

  const handleDeployClick = (e: React.MouseEvent, destination: Destination) => {
    e.stopPropagation();
    onDestinationClick(destination);
  };

  return (
    <section className={styles.destinationsSection} data-section="tours">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            TOURS
          </h2>
          <div className={styles.subtitle}>
            <div className={styles.subtitleLine}></div>
            <span className={styles.subtitleText}>
              SELECT DESTINATION
            </span>
          </div>
        </div>

        {/* Destination Grid */}
        <div className={styles.grid}>
          {destinations.map((destination, index) => (
            <div 
              key={destination.id}
              className={`${styles.destinationCard} ${
                activeDestination === index ? styles.active : ''
              }`}
              onClick={() => handleDestinationClick(destination)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image */}
              <div className={styles.imageContainer}>
                <Image 
                  src={destination.image}
                  alt={`${destination.name} - ${destination.country}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.destinationImage}
                />
                <div className={styles.imageCode}>
                  {destination.code}
                </div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.contentInfo}>
                  <div className={styles.titleGroup}>
                    <h3 className={styles.destinationTitle}>
                      {destination.name}
                    </h3>
                    <div className={styles.destinationMeta}>
                      <span>{destination.country}</span>
                      <span className={styles.metaSeparator}>•</span>
                      <span>{destination.coordinates}</span>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className={styles.specsGrid}>
                    <div className={styles.specItem}>
                      <div className={styles.specLabel}>
                        SEASON
                      </div>
                      <div className={styles.specValue}>
                        {destination.season}
                      </div>
                    </div>
                    <div className={styles.specItem}>
                      <div className={styles.specLabel}>
                        DIFFICULTY
                      </div>
                      <div className={styles.specValue}>
                        {destination.difficulty}
                      </div>
                    </div>
                    <div className={styles.specItem}>
                      <div className={styles.specLabel}>
                        RATING
                      </div>
                      <div className={styles.specValue}>
                        <Star size={12} className={styles.starIcon} />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className={styles.priceSection}>
                  <div className={styles.priceGroup}>
                    <div className={styles.priceLabel}>
                      FROM
                    </div>
                    <div className={styles.price}>
                      {destination.price}
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => handleDeployClick(e, destination)}
                    className={styles.deployButton}
                    aria-label={`View details for ${destination.name}`}
                  >
                    BOOK_
                    <ArrowRight className={styles.deployIcon} size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;