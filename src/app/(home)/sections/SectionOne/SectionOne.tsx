import styles from "./SectionOne.module.scss";
import button_icon from "@/assets/button_icon.svg";
import Image from "next/image";
export const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.header}>
          <div className={styles.button_group}>
            <button className={styles.button}>
              Button 1{" "}
              <Image
                src={button_icon}
                alt="Arrow Right Icon"
                width={16}
                height={16}
                className={styles.icon}
              />
            </button>
            <button className={styles.button}>
              Button 2{" "}
              <Image
                src={button_icon}
                alt="Arrow Right Icon"
                width={16}
                height={16}
                className={styles.icon}
              />
            </button>
            <button className={styles.button}>
              Button 3{" "}
              <Image
                src={button_icon}
                alt="Arrow Right Icon"
                width={16}
                height={16}
                className={styles.icon}
              />
            </button>
            <button className={styles.button}>
              Button 3{" "}
              <Image
                src={button_icon}
                alt="Arrow Right Icon"
                width={16}
                height={16}
                className={styles.icon}
              />
            </button>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Innovative <span>Software</span> and <span>Security</span>{" "}
              Solutions
            </h1>
            <p className={styles.description}>
              Since 2013, we have been providing your business with digital
              security and automation technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
