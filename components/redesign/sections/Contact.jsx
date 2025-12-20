import { motion } from 'framer-motion';
import Card from '../Card';
import styles from './Sections.module.scss';

export default function Contact({ data }) {
  const { message, email, links = [] } = data;

  return (
    <Card id="contact-section" title="Contact" delay={0.5}>
      <p className={styles.mainText}>
        {message}{' '}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      
      {links.length > 0 && (
        <motion.div 
          className={styles.contactLinks}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </Card>
  );
}
