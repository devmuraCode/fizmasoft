"use client";
import Image from "next/image";
import smart from "@/assets/smart.svg";
import abl from "@/assets/abl.svg";
import styles from "./PartnerLogos.module.scss";

const logos = [smart, abl, smart, abl, smart, abl];

export const PartnerLogos = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        {logos.map((logo, index) => (
          <Image
            key={`set1-${index}`}
            src={logo}
            alt="Partner Logo"
            className={styles.logo}
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`set2-${index}`}
            src={logo}
            alt="Partner Logo"
            className={styles.logo}
          />
        ))}
      </div>
    </div>
  );
};
