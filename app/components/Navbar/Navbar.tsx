"use client";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={50} />
        </Link>
      </div>
      <ul className={styles.app__navbar_links}>
        {toggle
          ? null
          : // Only render the links if the toggle is false
            ["about", "artwork", "allu-model", "nft", "contact"].map((item) => (
              <li
                className={`${styles.app__flex} ${styles.p_text}`}
                key={`link-${item}`}
              >
                <div />
                <a href={`/${item}`}>{item}</a>
              </li>
            ))}
      </ul>

      <div className={styles.app__navbar_menu}>
        <div
          className={`${styles.burger_icon} ${toggle ? "open" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <HiX /> : <HiMenuAlt4 />}
        </div>
        {toggle && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className={styles.menu_content}
          >
            <ul>
              {["about", "artwork", "allu-model", "nft", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
