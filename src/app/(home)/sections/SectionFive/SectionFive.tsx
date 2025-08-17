"use client";
import styles from "./SectionFive.module.scss";
import { PartnerLogos } from "./PartnerLogos/PartnerLogos";
import arrow from "@/assets/arrow.svg";
import Image from "next/image";
export const SectionFive = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.partners}>
        <div className="container_custom">
          <div className={styles.textContainer}>
            <div className={styles.content}>
              <h2>
                OUR VALUED <br /> <span>PARTNERS</span>
              </h2>

              <span className={styles.box}>
                <Image src={arrow} alt="box" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <PartnerLogos />
    </div>
  );
};
