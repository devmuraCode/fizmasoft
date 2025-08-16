"use client";
import { useState } from "react";
import { Button } from "../Button/Button";
import Logo from "./Logo/Logo";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.nav}>
          <div className={styles.navbar}>
            <Logo />

            {/* меню (и на мобилке, и на десктопе) */}
            <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
              <MenuItem label="services" />
              <MenuItem label="About" />
              <MenuItem label="partners" />
              <MenuItem label="team" />

              {/* на мобилке кнопка здесь */}
              <div className={styles.mobileButton}>
                <Button label="Contact" variant="secondary" />
              </div>
            </div>

            {/* бургер */}
            <button
              className={`${styles.burger} ${isOpen ? styles.active : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* на десктопе кнопка справа */}
          <div className={styles.desktopButton}>
            <Button label="Contact" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
