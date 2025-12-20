import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
      delayChildren: 0.1,
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

// Cool ASCII-style graphic component
function TechGraphic() {
  return (
    <motion.div 
      className={styles.graphicContainer}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className={styles.techSvg}
        aria-hidden="true"
      >
        {/* Outer frame */}
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
        
        {/* Circuit-like patterns */}
        <g className={styles.circuitLines}>
          {/* Horizontal lines */}
          <line x1="30" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2"/>
          <line x1="120" y1="50" x2="170" y2="50" stroke="currentColor" strokeWidth="2"/>
          <line x1="30" y1="150" x2="80" y2="150" stroke="currentColor" strokeWidth="2"/>
          <line x1="120" y1="150" x2="170" y2="150" stroke="currentColor" strokeWidth="2"/>
          
          {/* Vertical lines */}
          <line x1="50" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="2"/>
          <line x1="150" y1="30" x2="150" y2="70" stroke="currentColor" strokeWidth="2"/>
          <line x1="50" y1="130" x2="50" y2="170" stroke="currentColor" strokeWidth="2"/>
          <line x1="150" y1="130" x2="150" y2="170" stroke="currentColor" strokeWidth="2"/>
          
          {/* Connection dots */}
          <circle cx="50" cy="50" r="4" fill="currentColor"/>
          <circle cx="150" cy="50" r="4" fill="currentColor"/>
          <circle cx="50" cy="150" r="4" fill="currentColor"/>
          <circle cx="150" cy="150" r="4" fill="currentColor"/>
          <circle cx="80" cy="50" r="3" fill="currentColor"/>
          <circle cx="120" cy="50" r="3" fill="currentColor"/>
          <circle cx="80" cy="150" r="3" fill="currentColor"/>
          <circle cx="120" cy="150" r="3" fill="currentColor"/>
        </g>
        
        {/* Center element - stylized "K" or tech symbol */}
        <g className={styles.centerSymbol}>
          <rect x="70" y="70" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="3"/>
          <text x="100" y="112" textAnchor="middle" fontSize="36" fontFamily="var(--font-mono)" fontWeight="600" fill="currentColor">K</text>
        </g>
        
        {/* Decorative corner elements */}
        <path d="M10 30 L10 10 L30 10" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M170 10 L190 10 L190 30" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M190 170 L190 190 L170 190" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M30 190 L10 190 L10 170" fill="none" stroke="currentColor" strokeWidth="3"/>
        
        {/* Animated pulse circles */}
        <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" className={styles.pulse1}/>
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" className={styles.pulse2}/>
      </svg>
    </motion.div>
  );
}

export default function Header({ 
  name = "Kyle Zhang",
  tagline = "Entrepreneurial UPenn M&T graduate building meaningful experiences in gaming and healthcare",
  profileImage = "/headshot.jpeg",
  email = "kyle@example.com"
}) {
  return (
    <motion.header
      id="header-section"
      className={styles.header}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.headerGrid}>
        {/* Left side - Tech graphic */}
        <TechGraphic />
        
        {/* Right side - Info cards */}
        <div className={styles.infoColumn}>
          {/* Name card with profile */}
          <motion.div className={styles.nameCard} variants={itemVariants}>
            <div className={styles.profileImage}>
              <img src={profileImage} alt={name} />
            </div>
            <h1 className={styles.name}>{name}</h1>
          </motion.div>
          
          {/* Tagline card */}
          <motion.div className={styles.taglineCard} variants={itemVariants}>
            <p className={styles.tagline}>{tagline}</p>
          </motion.div>
          
          {/* Contact card */}
          <motion.div className={styles.contactCard} variants={itemVariants}>
            <a 
              href={`mailto:${email}`} 
              className={styles.emailLink}
            >
              <FaEnvelope className={styles.emailIcon} />
              <span>{email}</span>
            </a>
            
            <div className={styles.socialIcons}>
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
        </div>
      </div>
    </motion.header>
  );
}
