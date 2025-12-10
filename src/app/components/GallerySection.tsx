'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';
import DynamicBackground from './DynamicBackground';
interface ImageData {
  id: number;
  src: string;
  alt: string;
  size: 'small' | 'normal' | 'big';
  layer: 'front' | 'middle' | 'back';
}

const GALLERY_IMAGES_DATA: ImageData[] = [
  { id: 1, src: '/bhutan-tigers-nest-4-day-tour.jpg', alt: 'Bhutan Tigers Nest Monastery Tour', size: 'big' as const, layer: 'back' as const },
  { id: 2, src: '/bhutan-punakha-dzong-6-day-tour.jpg', alt: 'Bhutan Punakha Dzong Tour Package', size: 'normal' as const, layer: 'middle' as const },
  { id: 3, src: '/bhutan-haa-valley-expedition.jpg', alt: 'Bhutan Haa Valley Expedition', size: 'small' as const, layer: 'front' as const },
  { id: 4, src: '/bhutan-phobjikha-crane-valley.jpg', alt: 'Bhutan Phobjikha Valley Black-necked Cranes', size: 'big' as const, layer: 'middle' as const },
  { id: 5, src: '/bhutan-mountain-landscape-hero.jpg', alt: 'Bhutan Mountain Landscape Himalayan Views', size: 'normal' as const, layer: 'back' as const },
  { id: 6, src: '/bhutan-ancient-temple.jpg', alt: 'Bhutan Ancient Buddhist Temple', size: 'big' as const, layer: 'front' as const },
  { id: 7, src: '/bhutan-festival-colors.jpg', alt: 'Bhutan Festival Tsechu Colors', size: 'small' as const, layer: 'middle' as const },
  { id: 8, src: '/bhutan-cloud-kingdom.jpg', alt: 'Bhutan Cloud Kingdom Mountains', size: 'big' as const, layer: 'back' as const },
  { id: 9, src: '/bhutan-stone-fortress.jpg', alt: 'Bhutan Stone Fortress Dzong', size: 'normal' as const, layer: 'front' as const },
  { id: 10, src: '/bhutan-textile-art.jpg', alt: 'Bhutan Traditional Textile Art Weaving', size: 'small' as const, layer: 'back' as const },
  { id: 11, src: '/bhutan-golden-hour-monastery.jpg', alt: 'Bhutan Monastery Golden Hour Sunset', size: 'big' as const, layer: 'middle' as const },
  { id: 12, src: '/bhutan-monastery-gates.jpg', alt: 'Bhutan Monastery Gates Architecture', size: 'small' as const, layer: 'front' as const },
  { id: 13, src: '/bhutan-traditional-dance.jpg', alt: 'Bhutan Traditional Mask Dance Festival', size: 'normal' as const, layer: 'middle' as const },
  { id: 14, src: '/bhutan-river-valley.jpg', alt: 'Bhutan River Valley Scenic View', size: 'big' as const, layer: 'back' as const },
  { id: 15, src: '/bhutan-sacred-symbols.jpg', alt: 'Bhutan Sacred Buddhist Symbols', size: 'small' as const, layer: 'front' as const },
  { id: 16, src: '/bhutan-mountain-pass.jpg', alt: 'Bhutan Mountain Pass Dochula', size: 'normal' as const, layer: 'middle' as const },
  { id: 17, src: '/bhutan-temple-details.jpg', alt: 'Bhutan Temple Architecture Details', size: 'big' as const, layer: 'back' as const },
  { id: 18, src: '/bhutan-landscape-scenery.jpeg', alt: 'Bhutan Landscape Scenery Nature', size: 'normal' as const, layer: 'front' as const },
  { id: 19, src: '/bhutan-mountain-vista.jpeg', alt: 'Bhutan Mountain Vista Panoramic View', size: 'big' as const, layer: 'middle' as const },
  { id: 20, src: '/bhutan-cultural-heritage.jpeg', alt: 'Bhutan Cultural Heritage Site', size: 'small' as const, layer: 'back' as const },
  { id: 21, src: '/bhutan-dzong-architecture.jpeg', alt: 'Bhutan Dzong Architecture Fortress', size: 'normal' as const, layer: 'front' as const },
  { id: 22, src: '/bhutan-prayer-flags.jpeg', alt: 'Bhutan Prayer Flags Himalayan Mountains', size: 'big' as const, layer: 'middle' as const },
  { id: 23, src: '/bhutan-himalayan-serenity.jpeg', alt: 'Bhutan Himalayan Serenity Peaceful', size: 'small' as const, layer: 'back' as const }
];


// MODIFIED: Removed GallerySectionProps from component signature
const GallerySection: React.FC = () => { 
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<'front' | 'middle' | 'back' | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 2. Add a ref for the middle layer element
  const middleLayerRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);

// Create 3 copies for infinite loop effect
const galleryImages: ImageData[] = useMemo(() => {
  return [
    ...GALLERY_IMAGES_DATA.map(img => ({ ...img, id: img.id })),
    ...GALLERY_IMAGES_DATA.map(img => ({ ...img, id: img.id + 100 })),
    ...GALLERY_IMAGES_DATA.map(img => ({ ...img, id: img.id + 200 }))
  ];
}, []);

  const imagesByLayer = useMemo(() => {
    return {
      back: galleryImages.filter(img => img.layer === 'back'),
      middle: galleryImages.filter(img => img.layer === 'middle'),
      front: galleryImages.filter(img => img.layer === 'front')
    };
  }, [galleryImages]);

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages(prev => {
      if (prev.has(id)) return prev;
      return new Set(prev).add(id);
    });
  }, []);

  // 3. Add useEffect to handle the parallax scroll effect
  useEffect(() => {
    const handleParallaxScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const middleLayer = middleLayerRef.current;
      
      
      if (!scrollContainer || !middleLayer) return;

      // This factor determines how much slower the middle layer moves. 
      // A value of 0.3 means it moves at 30% of the normal scroll speed.
      const parallaxFactor = 0.15; 
      const scrollOffset = scrollContainer.scrollLeft;

      // We push the layer forward (positive translateX) as the user scrolls,
      // which counteracts the natural scroll and makes it appear slower.
      middleLayer.style.setProperty('--_scroll-x', `${scrollOffset * parallaxFactor}px`);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleParallaxScroll);
    }
    
    // Cleanup function to remove the event listener
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleParallaxScroll);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount


  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const slider = e.currentTarget;
    isDraggingRef.current = true;
    
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    
    const handleMouseMove = (mouseEvent: MouseEvent) => {
      mouseEvent.preventDefault(); 
      const x = mouseEvent.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; 
      slider.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      isDraggingRef.current = false;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const renderImage = useCallback((image: ImageData) => {
    const isImageHovered = hoveredId === image.id;
    
    const style: React.CSSProperties = {
        zIndex: isImageHovered ? 1000 : (image.layer === 'front' ? 30 : image.layer === 'middle' ? 20 : 10),
        transform: isImageHovered ? 'scale(1.08) translateY(-20px)' : 'scale(1)',
        opacity: isImageHovered ? 1 : (image.layer === 'front' ? 1 : image.layer === 'middle' ? 0.85 : 0.7),
    };

    return (
      <div
        key={image.id}
        className={`${styles.photoItem} ${styles[image.size]} ${isImageHovered ? styles.hovered : ''}`}
        style={style}
        onMouseEnter={() => {
          setHoveredId(image.id);
          setHoveredLayer(image.layer);
        }}
        onMouseLeave={() => {
          setHoveredId(null);
          setHoveredLayer(null);
        }}
      >
        <div className={styles.photoCard}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`${styles.image} ${loadedImages.has(image.id) ? styles.loaded : ''}`}
            onLoad={() => handleImageLoad(image.id)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={90}
          />
          
          {!loadedImages.has(image.id) && (
            <div className={styles.skeleton}>
              <div className={styles.skeletonShimmer} />
            </div>
          )}
        </div>
      </div>
    );
  }, [hoveredId, handleImageLoad, loadedImages]);

  return (
    <section className={styles.gallerySection} id="gallery-preview">
      <DynamicBackground 
        variant="warm" 
        animationSpeed="fast" 
        blurIntensity="medium" 
        noiseIntensity="light" 
      />

      {/* ... (Header remains the same) ... */}
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <span className={styles.titleLabel}>Visual</span>
          <h2 className={styles.titleMain}>GALLERY</h2>
          <p className={styles.subtitle}>Scroll right to explore the collection</p>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className={styles.scrollContainer}
        onMouseDown={handleMouseDown}
      >
        <div className={styles.galleryLayers}>
          <div 
            className={`${styles.galleryLayer} ${styles.layerBack}`}
            style={{ zIndex: hoveredLayer === 'back' ? 1000 : 1 }}
          >
            {imagesByLayer.back.map(renderImage)}
          </div>

          {/* 4. Add the new ref to the middle layer div */}
          <div
            ref={middleLayerRef}
            className={`${styles.galleryLayer} ${styles.layerMiddle}`}
            style={{ zIndex: hoveredLayer === 'middle' ? 1000 : 2 }}
          >
            {imagesByLayer.middle.map(renderImage)}
          </div>

          <div 
            className={`${styles.galleryLayer} ${styles.layerFront}`}
            style={{ zIndex: hoveredLayer === 'front' ? 1000 : 3 }}
          >
            {imagesByLayer.front.map(renderImage)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;