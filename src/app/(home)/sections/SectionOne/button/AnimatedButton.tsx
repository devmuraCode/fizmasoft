import React from "react";
import styles from "./AnimatedButton.module.scss";

interface AnimatedButtonProps {
  text: string;
  icon: React.ReactNode;
  expanded?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  icon,
  expanded = false,
}) => {
  return (
    <button className={`${styles.button} ${expanded ? styles.expanded : ""}`}>
      <span className={styles.text}>{text}</span>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};
