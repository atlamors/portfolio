import { motion } from 'framer-motion';
import Card from '../Card';
import styles from './Sections.module.scss';

const skillVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Skills({ data }) {
  const categories = data || [];

  return (
    <Card id="skills-section" title="Skills" delay={0.4}>
      <div className={styles.skillsContainer}>
        {categories.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
            <motion.div 
              className={styles.skillTags}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i} 
                  className={styles.skillTag}
                  variants={tagVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Card>
  );
}
