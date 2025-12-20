import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
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

const socialLinks = [
  {
    icon: FaEnvelope,
    href: 'mailto:kyle@example.com',
    label: 'Email',
    text: 'kyle@example.com',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/zhangkyle/',
    label: 'LinkedIn',
    text: 'linkedin.com/in/zhangkyle',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/RiptideStar',
    label: 'GitHub',
    text: 'github.com/RiptideStar',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/',
    label: 'Twitter',
    text: '@kylezhang',
  },
];

export default function Contact({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { message } = data || {};

  return (
    <motion.section
      id="contact-section"
      ref={ref}
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        <motion.div className={styles.sectionHeader} variants={itemVariants}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
        </motion.div>

        <motion.div className={styles.content} variants={itemVariants}>
          <p className={styles.contactIntro}>
            {message || "I'm always excited to connect with fellow builders, researchers, and anyone passionate about technology. Whether you have a project idea, want to collaborate, or just want to chat—reach out!"}
          </p>
        </motion.div>

        <motion.div className={styles.contactGrid} variants={containerVariants}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={styles.contactCard}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <link.icon className={styles.contactIcon} />
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>{link.label}</span>
                <span className={styles.contactText}>{link.text}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
