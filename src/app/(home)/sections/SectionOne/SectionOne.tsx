import { AnimatedButton } from "./button/AnimatedButton";
import styles from "./SectionOne.module.scss";
import { FaLinkedinIn } from "react-icons/fa";

export const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.header}>
          <div className={styles.button_group}>
            <AnimatedButton text="Linkedin" icon={<FaLinkedinIn />} expanded />
            <AnimatedButton text="Linkedin" icon={<FaLinkedinIn />} />
            <AnimatedButton text="Linkedin" icon={<FaLinkedinIn />} />
            <AnimatedButton text="Linkedin" icon={<FaLinkedinIn />} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Innovative <span>Software</span> and <span>Security</span>{" "}
              Solutions
            </h1>
            <p className={styles.description}>
              Since 2013, we have been providing your business with <br />{" "}
              digital security and automation technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
