"use client";
import styles from "./MenuItem.module.scss";
interface MenuItemProps {
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return <div className={styles.menuItem}>{label}</div>;
};

export default MenuItem;
