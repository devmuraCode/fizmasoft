import Logo from "@/components/Navbar/Logo/Logo";
import styles from "./SectionEight.module.scss";
import Link from "next/link";
export const SectionEight = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.nav}>
          <div className={styles.navbar}>
            <Logo />
            <div className={styles.menu}>
              <a href="phone" className={styles.link}>
                +998 55 502 04 04
              </a>
              <a href="mailato:info@fizmasoft.uz">info@fizmasoft.uz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
