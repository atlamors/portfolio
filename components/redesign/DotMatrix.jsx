import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DotMatrix.module.scss';

// Grid configuration
const GRID_SIZE = 15;
const DOT_COUNT = GRID_SIZE * GRID_SIZE;

// Icon definitions - each icon is a set of dot indices that should be "active"
// Grid is 15x15 (0-224), calculated as row * 15 + col
const generateIconDots = (pattern) => {
  const dots = new Set();
  pattern.forEach(([row, col]) => {
    if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
      dots.add(row * GRID_SIZE + col);
    }
  });
  return dots;
};

// Rocket League car icon - stylized car silhouette
const rocketLeagueCar = generateIconDots([
  // Car body
  [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11],
  [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [8, 10], [8, 11], [8, 12],
  [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9], [9, 10], [9, 11], [9, 12],
  // Cabin/top
  [6, 5], [6, 6], [6, 7], [6, 8], [6, 9],
  [5, 6], [5, 7], [5, 8],
  // Wheels
  [10, 3], [10, 4], [11, 3], [11, 4],
  [10, 10], [10, 11], [11, 10], [11, 11],
  // Boost flames
  [8, 13], [9, 13], [8, 14], [7, 13],
]);

// Neural network / AI brain icon
const neuralNetwork = generateIconDots([
  // Input layer (left)
  [3, 2], [5, 2], [7, 2], [9, 2], [11, 2],
  // Hidden layer 1
  [4, 5], [6, 5], [8, 5], [10, 5],
  // Hidden layer 2
  [5, 8], [7, 8], [9, 8],
  // Output layer
  [6, 11], [8, 11],
  // Connections (dots along the paths)
  [3, 3], [4, 4], [5, 3], [6, 4], [7, 3], [8, 4], [9, 3], [10, 4], [11, 3],
  [4, 6], [5, 7], [6, 6], [7, 7], [8, 6], [9, 7], [10, 6],
  [5, 9], [6, 10], [7, 9], [8, 10], [9, 9],
  // Brain outline hint
  [2, 6], [2, 7], [2, 8], [12, 6], [12, 7], [12, 8],
]);

// Microphone / Music note for a cappella
const microphone = generateIconDots([
  // Mic head (circle)
  [3, 6], [3, 7], [3, 8],
  [4, 5], [4, 9],
  [5, 5], [5, 9],
  [6, 5], [6, 9],
  [7, 6], [7, 7], [7, 8],
  // Mic body
  [8, 7], [9, 7], [10, 7],
  // Stand base
  [11, 5], [11, 6], [11, 7], [11, 8], [11, 9],
  [12, 4], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 10],
  // Sound waves
  [4, 3], [5, 2], [6, 3],
  [4, 11], [5, 12], [6, 11],
  [3, 4], [3, 10],
]);

// Globe / Travel / Wanderlust icon
const wanderlust = generateIconDots([
  // Globe circle
  [2, 7],
  [3, 5], [3, 6], [3, 7], [3, 8], [3, 9],
  [4, 4], [4, 10],
  [5, 3], [5, 11],
  [6, 3], [6, 11],
  [7, 3], [7, 11],
  [8, 3], [8, 11],
  [9, 3], [9, 11],
  [10, 4], [10, 10],
  [11, 5], [11, 6], [11, 7], [11, 8], [11, 9],
  [12, 7],
  // Longitude line
  [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7],
  // Latitude lines
  [5, 5], [5, 6], [5, 8], [5, 9],
  [7, 4], [7, 5], [7, 6], [7, 8], [7, 9], [7, 10],
  [9, 5], [9, 6], [9, 8], [9, 9],
  // Plane
  [4, 12], [5, 13], [6, 12], [5, 11], [5, 12],
]);

// Lightbulb / Innovation icon
const lightbulb = generateIconDots([
  // Bulb top
  [2, 7],
  [3, 5], [3, 6], [3, 7], [3, 8], [3, 9],
  [4, 4], [4, 10],
  [5, 3], [5, 11],
  [6, 3], [6, 11],
  [7, 4], [7, 10],
  [8, 5], [8, 9],
  // Neck
  [9, 6], [9, 7], [9, 8],
  // Base
  [10, 5], [10, 6], [10, 7], [10, 8], [10, 9],
  [11, 6], [11, 7], [11, 8],
  [12, 6], [12, 7], [12, 8],
  // Filament/rays
  [4, 6], [4, 7], [4, 8],
  [5, 7],
  // Rays emanating
  [1, 7],
  [2, 4], [2, 10],
  [4, 2], [4, 12],
]);

// Rocket icon for entrepreneurship
const rocket = generateIconDots([
  // Nose cone
  [2, 7],
  [3, 6], [3, 7], [3, 8],
  // Body
  [4, 5], [4, 6], [4, 7], [4, 8], [4, 9],
  [5, 5], [5, 6], [5, 7], [5, 8], [5, 9],
  [6, 5], [6, 6], [6, 7], [6, 8], [6, 9],
  [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
  [8, 5], [8, 6], [8, 7], [8, 8], [8, 9],
  // Fins
  [7, 3], [8, 3], [9, 4],
  [7, 11], [8, 11], [9, 10],
  // Engine
  [9, 6], [9, 7], [9, 8],
  // Flames
  [10, 7],
  [11, 6], [11, 7], [11, 8],
  [12, 5], [12, 7], [12, 9],
  [13, 6], [13, 8],
]);

// Code brackets icon - for developer
const codeBrackets = generateIconDots([
  // Left bracket <
  [4, 4], [5, 3], [6, 2], [7, 2], [8, 2], [9, 3], [10, 4],
  // Slash /
  [5, 8], [6, 7], [7, 7], [8, 7], [9, 6],
  // Right bracket >
  [4, 10], [5, 11], [6, 12], [7, 12], [8, 12], [9, 11], [10, 10],
  // Dots for decoration
  [3, 6], [3, 7], [3, 8],
  [11, 6], [11, 7], [11, 8],
]);

// Heart icon - for passion/creativity
const heart = generateIconDots([
  // Top curves
  [4, 4], [4, 5], [4, 9], [4, 10],
  [3, 3], [3, 4], [3, 5], [3, 6], [3, 8], [3, 9], [3, 10], [3, 11],
  [4, 2], [4, 3], [4, 6], [4, 8], [4, 11], [4, 12],
  [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [5, 11], [5, 12],
  // Middle
  [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [6, 10], [6, 11],
  [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10],
  [8, 5], [8, 6], [8, 7], [8, 8], [8, 9],
  // Bottom point
  [9, 6], [9, 7], [9, 8],
  [10, 7],
]);

// All icons with labels
const ICONS = [
  { id: 'rocket-league', name: 'Gaming', dots: rocketLeagueCar, color: '#3B82F6' },
  { id: 'neural-network', name: 'AI/ML', dots: neuralNetwork, color: '#8B5CF6' },
  { id: 'microphone', name: 'Music', dots: microphone, color: '#EC4899' },
  { id: 'wanderlust', name: 'Travel', dots: wanderlust, color: '#10B981' },
  { id: 'lightbulb', name: 'Ideas', dots: lightbulb, color: '#F59E0B' },
  { id: 'rocket', name: 'Building', dots: rocket, color: '#EF4444' },
  { id: 'code', name: 'Code', dots: codeBrackets, color: '#06B6D4' },
  { id: 'heart', name: 'Passion', dots: heart, color: '#F43F5E' },
];

// Duration each icon is shown (ms)
const ICON_DURATION = 3000;
// Transition duration for dots
const DOT_TRANSITION = 0.6;

export default function DotMatrix({ className = '' }) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Cycle through icons
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIconIndex((prev) => (prev + 1) % ICONS.length);
        setIsAnimating(false);
      }, 300);
    }, ICON_DURATION);

    return () => clearInterval(interval);
  }, []);

  const currentIcon = ICONS[currentIconIndex];

  // Generate dots array
  const dots = useMemo(() => {
    return Array.from({ length: DOT_COUNT }, (_, i) => ({
      id: i,
      row: Math.floor(i / GRID_SIZE),
      col: i % GRID_SIZE,
    }));
  }, []);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.matrixWrapper}>
        <motion.div
          className={styles.dotGrid}
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          }}
        >
          {dots.map((dot) => {
            const isActive = currentIcon.dots.has(dot.id);
            const delay = (dot.row + dot.col) * 0.02;

            return (
              <motion.div
                key={dot.id}
                className={styles.dotWrapper}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.4,
                  opacity: isActive ? 1 : 0.15,
                }}
                transition={{
                  duration: DOT_TRANSITION,
                  delay: delay,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <motion.div
                  className={styles.dot}
                  animate={{
                    backgroundColor: isActive ? currentIcon.color : 'var(--dot-inactive)',
                  }}
                  transition={{
                    duration: DOT_TRANSITION * 0.8,
                    delay: delay,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Icon label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIcon.id}
          className={styles.iconLabel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className={styles.labelText}
            style={{ color: currentIcon.color }}
          >
            {currentIcon.name}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator */}
      <div className={styles.progressContainer}>
        {ICONS.map((icon, index) => (
          <button
            key={icon.id}
            className={`${styles.progressDot} ${index === currentIconIndex ? styles.active : ''}`}
            onClick={() => setCurrentIconIndex(index)}
            aria-label={`Show ${icon.name} icon`}
            style={{
              backgroundColor: index === currentIconIndex ? icon.color : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}
