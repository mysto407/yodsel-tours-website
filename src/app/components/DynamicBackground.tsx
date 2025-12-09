import React from 'react';
import styles from './DynamicBackground.module.css';

export type BackgroundVariant = 'default' | 'warm' | 'cool' | 'subtle';
export type AnimationSpeed = 'fast' | 'normal' | 'slow';
export type BlurIntensity = 'light' | 'medium' | 'heavy';
export type NoiseIntensity = 'subtle' | 'light' | 'medium';

interface DynamicBackgroundProps {
  variant?: BackgroundVariant;
  animationSpeed?: AnimationSpeed;
  blurIntensity?: BlurIntensity;
  noiseIntensity?: NoiseIntensity;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  variant = 'default',
  animationSpeed = 'normal',
  blurIntensity = 'medium',
  noiseIntensity = 'light'
}) => {
  // Map variant to corresponding style classes
  const gradientClass = {
    default: styles.gradientDefault,
    warm: styles.gradientWarm,
    cool: styles.gradientCool,
    subtle: styles.gradientSubtle
  }[variant];

  const shapesClass = {
    default: styles.shapesDefault,
    warm: styles.shapesWarm,
    cool: styles.shapesCool,
    subtle: styles.shapesSubtle
  }[variant];

  const animationClass = {
    fast: styles.animationFast,
    normal: styles.animationNormal,
    slow: styles.animationSlow
  }[animationSpeed];

  const blurClass = {
    light: styles.blurLight,
    medium: styles.blurMedium,
    heavy: styles.blurHeavy
  }[blurIntensity];

  const noiseClass = {
    subtle: styles.noiseSubtle,
    light: styles.noiseLight,
    medium: styles.noiseMedium
  }[noiseIntensity];

  return (
    <div className={styles.backgroundCanvas}>
      <div className={`${styles.noiseOverlay} ${noiseClass}`}></div>
      <div className={`${styles.gradientMesh} ${gradientClass}`}></div>
      <div className={`${styles.floatingShapes} ${shapesClass} ${animationClass} ${blurClass}`}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        {variant !== 'subtle' && <div className={styles.shape3}></div>}
      </div>
    </div>
  );
};

export default DynamicBackground;