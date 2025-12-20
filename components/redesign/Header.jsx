import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import DotMatrix from './DotMatrix';
import styles from './Header.module.scss';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/RiptideStar',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/zhangkyle/',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/',
    label: 'Twitter',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Header({
  name = "Kyle Zhang",
  tagline = "Builder. Researcher. Creator.",
  description = "M&T graduate from UPenn, passionate about building products at the intersection of gaming, AI, and human impact.",
  email = "kyle@example.com"
}) {
  const scrollToContent = () => {
    const content = document.getElementById('about-section');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      id="header-section"
      className={styles.header}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.heroContent}>
        {/* Dot Matrix Animation - Hero Element */}
        <motion.div
          className={styles.dotMatrixWrapper}
          variants={itemVariants}
        >
          <DotMatrix />
        </motion.div>

        {/* Name and Intro */}
        <motion.div className={styles.introSection} variants={itemVariants}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.tagline}>{tagline}</p>
        </motion.div>

        {/* Description */}
        <motion.p className={styles.description} variants={itemVariants}>
          {description}
        </motion.p>

        {/* Social Links */}
        <motion.div className={styles.socialRow} variants={itemVariants}>
          <a
            href={`mailto:${email}`}
            className={styles.emailLink}
          >
            <FaEnvelope />
            <span>{email}</span>
          </a>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          className={styles.scrollIndicator}
          onClick={scrollToContent}
          variants={itemVariants}
          whileHover={{ y: 4 }}
          aria-label="Scroll to content"
        >
          <FaArrowDown />
        </motion.button>
      </div>
    </motion.header>
  );
}
