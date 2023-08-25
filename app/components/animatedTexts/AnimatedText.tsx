// components/AnimatedText.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedText.module.scss"; // Use the appropriate path for your styles

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typedText.length < text.length) {
        setTypedText(text.slice(0, typedText.length + 1));
      } else {
        clearInterval(typingInterval);
      }
    }, 2000); // Adjust the typing speed as needed

    return () => clearInterval(typingInterval);
  }, [typedText, text]);

  return <motion.div className={styles.animatedtext}>{typedText}</motion.div>;
};

export default AnimatedText;
