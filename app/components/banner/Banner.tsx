// components/Banner.tsx

import React, { ReactNode } from "react";
import styles from "./Banner.module.scss"; // Use the appropriate path for your styles
import ContactButton from "../contactbutton/ContactButton";

interface BannerProps {
  backgroundImage: string; // Prop to accept the background image URL
  children: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, children }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default Banner;
