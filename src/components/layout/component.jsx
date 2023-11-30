import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
