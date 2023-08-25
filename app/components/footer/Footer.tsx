// components/Footer.tsx

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss"; // Use the appropriate path for your styles

const Footer: React.FC = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <FaFacebook />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
