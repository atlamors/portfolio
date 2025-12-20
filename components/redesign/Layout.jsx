import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div id="layout-wrapper" className={styles.layout}>
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          className={styles.main}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.container}>
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      <footer id="footer-section" className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Kyle Zhang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
