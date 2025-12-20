import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styles from './Sections.module.scss';

const containerVariants = {
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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Work({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = data || [];

  return (
    <motion.section
      id="work-section"
      ref={ref}
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        <motion.div className={styles.sectionHeader} variants={itemVariants}>
          <span className={styles.sectionNumber}>02</span>
          <h2 className={styles.sectionTitle}>Work</h2>
        </motion.div>

        <motion.div className={styles.projectList} variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={styles.projectItem}
              variants={itemVariants}
            >
              <div className={styles.projectMeta}>
                <span className={styles.projectType}>
                  {project.type || 'Project'}
                </span>
                <div className={styles.projectLinks}>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit project"
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
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.projectName}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.project}
                  </a>
                ) : (
                  project.project
                )}
              </h3>

              <p className={styles.projectDescription}>
                <strong>{project.descriptionTitle}</strong> {project.description}
              </p>

              {project.stack && project.stack.length > 0 && (
                <div className={styles.techStack}>
                  {project.stack.slice(0, 5).map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech.name}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className={styles.techMore}>
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
