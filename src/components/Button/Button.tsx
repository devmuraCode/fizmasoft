import Image from "next/image";
import styles from "./Button.module.scss";
import button_icon from "@/assets/button_icon.svg";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {label}

      <Image
        src={button_icon}
        alt="Arrow Right Icon"
        width={16}
        height={16}
        className={styles.icon}
      />
    </button>
  );
};
