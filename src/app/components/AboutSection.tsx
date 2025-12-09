import React from 'react';
import { Mountain, Users, Award, Globe, ArrowRight } from 'lucide-react';
import styles from './AboutSection.module.css';


interface AboutSectionProps {
  onContactClick?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const expeditions = [
    { 
      icon: Mountain, 
      title: "MOUNTAIN PEAKS", 
      description: "Conquer the Himalayas and beyond with expert mountaineering guides"
    },
    { 
      icon: Globe, 
      title: "CULTURAL IMMERSION", 
      description: "Experience authentic traditions in remote villages and monasteries"
    },
    { 
      icon: Users, 
      title: "WILDLIFE TRACKING", 
      description: "Track rare species through pristine wilderness with naturalist experts"
    },
    { 
      icon: Award, 
      title: "ELITE ADVENTURES", 
      description: "Bespoke expeditions tailored for the most discerning explorers"
    }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.contentSide}>
          <div className={styles.contentContainer}>
            <div className={styles.headerGroup}>
              <div className={styles.sectionCode}>
                &lt;ABOUT&gt;
              </div>
              <h2 className={styles.title}>
                MASTERS OF<br/>
                THE UNKNOWN
              </h2>
              <div className={styles.tagline}>
                <div className={styles.taglineLine}></div>
                <span>EST. 1998 • BHUTAN</span>
              </div>
            </div>

            <div className={styles.description}>
              <p>
                For over two decades, we&apos;ve been pioneers in extreme expedition tourism, 
                guiding adventurers through the world&apos;s most challenging terrains. 
                From the peaks of the Himalayas to hidden valleys of Bhutan, 
                we don&apos;t just lead tours—we architect life-changing journeys.
              </p>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={onContactClick}
            >
              BEGIN YOUR EXPEDITION
              <ArrowRight className={styles.buttonIcon} size={16} />
            </button>
          </div>
        </div>

        {/* Right Expeditions */}
        <div className={styles.statsSide}>
          <div className={styles.statsGrid}>
            {expeditions.map((expedition, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <expedition.icon size={20} />
                </div>
                <div className={styles.expeditionTitle}>
                  {expedition.title}
                </div>
                <div className={styles.expeditionDescription}>
                  {expedition.description}
                </div>
              </div>
            ))}
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;