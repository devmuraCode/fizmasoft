import styles from "./SectionFive.module.scss";
import Image from "next/image";
import smart from "@/assets/smart.svg";
import abl from "@/assets/abl.svg";

export const SectionFive = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.partners}>
        <div className="container_custom">
          <div className={styles.textContainer}>
            <h2>OUR VALUED PARTNERS</h2>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Image
            src={smart}
            alt="Smart Logo"
            width={188}
            height={70}
            className={styles.logo}
          />
          <Image
            src={abl}
            alt="ABL Logo"
            width={188}
            height={70}
            className={styles.logo}
          />
          <Image
            src={smart}
            alt="Smart Logo"
            width={188}
            height={70}
            className={styles.logo}
          />
          <Image
            src={abl}
            alt="ABL Logo"
            width={188}
            height={70}
            className={styles.logo}
          />
          <Image
            src={smart}
            alt="Smart Logo"
            width={188}
            height={70}
            className={styles.logo}
          />
          <Image
            src={abl}
            alt="ABL Logo"
            width={188}
            height={70}
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};
