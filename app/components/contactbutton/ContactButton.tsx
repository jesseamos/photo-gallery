// components/ContactButton.tsx

import { motion } from "framer-motion";
import styles from "./ContactButton.module.scss"; // Use the appropriate path for your styles

interface ContactButtonProps {
  text: string;
  onClick: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ text, onClick }) => {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.button
      className={styles.contact_button}
      onClick={onClick}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.button>
  );
};

export default ContactButton;
