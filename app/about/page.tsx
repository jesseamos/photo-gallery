"use client";
import React from "react";
import Banner from "../components/banner/Banner";
import AnimatedText from "../components/animatedTexts/AnimatedText";
import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";
import Image from "next/image";
const AboutPage = () => {
  interface AboutData {
    title: string;
    imgUrl: string;
    description: string;
  }

  // Simulated array of abouts data
  const aboutsData: AboutData[] = [
    {
      title: "About 1",
      imgUrl: "/pexels-aleksandr-slobodianyk-989917.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore illum vel iusto deserunt beatae maiores. Veritatis nihil voluptatem, unde quaerat et, vel non commodi quis, doloremque deleniti repellat voluptatibus!",
    },
    {
      title: "About 2",
      imgUrl: "/pexels-tiana-2956376.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore illum vel iusto deserunt beatae maiores. Veritatis nihil voluptatem, unde quaerat et, vel non commodi quis, doloremque deleniti repellat voluptatibus!",
    },
    {
      title: "About 2",
      imgUrl: "/pexels-una-laurencic-20967.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore illum vel iusto deserunt beatae maiores. Veritatis nihil voluptatem, unde quaerat et, vel non commodi quis, doloremque deleniti repellat voluptatibus!",
    },
    // Add more abouts as needed
  ];

  return (
    <div>
      <Banner backgroundImage="/pexels-aleksandr-slobodianyk-989917.jpg">
        <div style={{ marginTop: "15rem" }}>
          <AnimatedText text="About US" />
        </div>
      </Banner>
      <>
        <h2 className={styles.head_text}>
          I Know that <span>Good Design</span> <br />
          means <span>Good Business</span>
        </h2>

        <div className={styles.app__profiles}>
          {aboutsData.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className={styles.app__profile_item}
              key={about.title + index}
            >
              <Image
                src={about.imgUrl}
                alt={about.title}
                width={100}
                height={100}
              />
              <h2 className={styles.bold_text} style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className={styles.p_text} style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </>
    </div>
  );
};

export default AboutPage;
