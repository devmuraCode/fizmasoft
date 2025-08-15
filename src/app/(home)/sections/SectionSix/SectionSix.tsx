"use client";
import { useEffect, useRef } from "react";
import styles from "./SectionSix.module.scss";
import qayrat from "@/assets/qayrat.svg";
import azamjon from "@/assets/azamjon.svg";
import Image from "next/image";

export const SectionSix = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll(`.${styles.slide}`));

    const handleScroll = () => {
      const center = carousel.scrollLeft + carousel.clientWidth / 2;

      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const offset = Math.abs(center - (carousel.scrollLeft + slideCenter));
        const maxOffset = carousel.clientWidth / 2;
        const opacity = Math.max(0.4, 1 - offset / maxOffset);
        (slide as HTMLElement).style.opacity = String(opacity);
      });
    };

    carousel.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Our <span>friendly</span> <br /> and <span>hardworking</span> team
      </h2>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.slide}>
          <Image src={qayrat} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            ARIF BOZOROV <span>PROJECT MANAGER</span>
          </p>
        </div>
        <div className={styles.slide}>
          <Image src={azamjon} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            AZAMJON RAHIMOV <span>CEO OF FIZMASOFT</span>
          </p>
        </div>
        <div className={styles.slide}>
          <Image src={qayrat} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            KAYRAT URAZOV <span>PROJECT MANAGER</span>
          </p>
        </div>
        <div className={styles.slide}>
          <Image src={azamjon} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            SHUHRATULLO NURMUKHAMAD <span>PROJECT MANAGER</span>
          </p>
        </div>
      </div>
    </div>
  );
};
