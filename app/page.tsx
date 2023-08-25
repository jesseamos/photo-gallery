// pages/index.tsx
"use client";
import React from "react";
import Banner from "./components/banner/Banner";
import { useRouter } from "next/navigation";
import ContactButton from "./components/contactbutton/ContactButton";
const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <Banner backgroundImage="/pexels-una-laurencic-20967.jpg">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ContactButton
            text="Contact us"
            onClick={() => router.push("/contact")}
          />
        </div>
      </Banner>
    </div>
  );
};

export default HomePage;
