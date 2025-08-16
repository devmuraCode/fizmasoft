import Logo from "@/components/Navbar/Logo/Logo";
import styles from "./SectionEight.module.scss";

export const SectionEight = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.nav}>
          <div className={styles.navbar}>
            <Logo />
            <div className={styles.menu}>
              <a href="tel:+998555020404" className={styles.link}>
                +998 55 502 04 04
              </a>
              <a href="mailto:info@fizmasoft.uz">info@fizmasoft.uz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
