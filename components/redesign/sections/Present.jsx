import { motion } from 'framer-motion';
import Card from '../Card';
import styles from './Sections.module.scss';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function Present({ data }) {
  const { intro, updates = [] } = data;

  return (
    <Card id="present-section" title="Present" delay={0.1}>
      <p className={styles.mainText}>
        {intro}
      </p>
      
      {updates.length > 0 && (
        <>
          <h3 className={styles.subheading}>Updates</h3>
          <motion.ul 
            className={styles.updateList}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {updates.map((update, index) => (
              <motion.li key={index} variants={itemVariants}>
                <span className={styles.updateDate}>{update.date}</span>
                <span className={styles.updateText}>
                  {update.text}
                  {update.link && (
                    <a href={update.link.url} target="_blank" rel="noopener noreferrer">
                      {update.link.text}
                    </a>
                  )}
                  {update.suffix}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </Card>
  );
}
