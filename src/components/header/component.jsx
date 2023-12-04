import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";
import { useTheme } from "../../contexts/theme/hooks";
import { ThemeProvider } from "../../contexts/theme/component";

export const Header = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <div className={classNames(styles.root, className)}>
      <ThemeProvider>
        <Button onClick={toggleTheme}>ToggleTheme</Button>
      </ThemeProvider>
    </div>
  );
};
