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

export default function Experience({ data }) {
  const { intro, education = [], internships = [] } = data;

  return (
    <Card id="experience-section" title="Experience" delay={0.2}>
      <p className={styles.mainText}>{intro}</p>
      
      {education.length > 0 && (
        <>
          <h3 className={styles.subheading}>Education</h3>
          <motion.ul 
            className={styles.itemList}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <strong>{item.name}</strong>
                )}
                {item.description && (
                  <span className={styles.itemDescription}> — {item.description}</span>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}

      {internships.length > 0 && (
        <>
          <h3 className={styles.subheading}>Internships</h3>
          <motion.ul 
            className={styles.itemList}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {internships.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <strong>{item.name}</strong>
                )}
                {item.description && (
                  <span className={styles.itemDescription}>, {item.description}</span>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </Card>
  );
}
