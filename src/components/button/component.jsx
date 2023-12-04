import { useTheme } from "../../contexts/theme/hooks";

import styles from "./styles.module.css";
import classNames from "classnames";

export const Button = ({ children, onClick, disabled, className }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </button>
  );
};
