import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Sections.module.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function About({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { intro, highlights = [] } = data || {};

  return (
    <motion.section
      id="about-section"
      ref={ref}
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        <motion.div className={styles.sectionHeader} variants={itemVariants}>
          <span className={styles.sectionNumber}>01</span>
          <h2 className={styles.sectionTitle}>About</h2>
        </motion.div>

        <motion.div className={styles.content} variants={itemVariants}>
          <p className={styles.intro}>{intro}</p>

          {highlights.length > 0 && (
            <motion.ul className={styles.highlightList} variants={containerVariants}>
              {highlights.map((highlight, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {highlight.link ? (
                    <>
                      {highlight.text}
                      <a href={highlight.link.url} target="_blank" rel="noopener noreferrer">
                        {highlight.link.text}
                      </a>
                      {highlight.suffix}
                    </>
                  ) : (
                    highlight.text
                  )}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
