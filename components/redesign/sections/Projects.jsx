import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Card from '../Card';
import styles from './Sections.module.scss';

const projectVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects({ data }) {
  const projects = data || [];

  return (
    <Card id="projects-section" title="Projects" delay={0.3}>
      <motion.div 
        className={styles.projectGrid}
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.article 
            key={index} 
            className={styles.projectCard}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.project}
                  </a>
                ) : (
                  project.project
                )}
              </h3>
              <div className={styles.projectLinks}>
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit project"
                    className={styles.projectLink}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.repo && project.repo !== 'Private' && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View source code"
                    className={styles.projectLink}
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
            
            <p className={styles.projectDescription}>
              <strong>{project.descriptionTitle}</strong> {project.description}
            </p>
            
            {project.stack && project.stack.length > 0 && (
              <div className={styles.techStack}>
                {project.stack.slice(0, 6).map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech.name}
                  </span>
                ))}
                {project.stack.length > 6 && (
                  <span className={styles.techTag}>+{project.stack.length - 6}</span>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </Card>
  );
}
