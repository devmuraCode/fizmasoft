import { Button } from "../Button/Button";
import Logo from "./Logo/Logo";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.nav}>
          <div className={styles.navbar}>
            <Logo />
            <div className={styles.menu}>
              <MenuItem label="services" />
              <MenuItem label="About" />
              <MenuItem label="partners" />
              <MenuItem label="team" />
            </div>
          </div>
          <Button label="Contact" variant="secondary" />
        </div>
      </div>
    </div>
  );
};
