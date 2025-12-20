import { motion } from 'framer-motion';
import styles from './Card.module.scss';

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Card({ 
  id,
  title, 
  children, 
  className = '',
  delay = 0 
}) {
  return (
    <motion.section
      id={id}
      className={`${styles.card} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      {title && (
        <h2 className={styles.title}>{title}</h2>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </motion.section>
  );
}
