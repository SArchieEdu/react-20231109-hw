/* eslint-disable react/jsx-key */
import classNames from "classnames";

import styles from "./styles.module.css";
import { DishContainer } from "../dish/container";

export const Menu = ({ dishIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      {dishIds?.map((id) => (
        <DishContainer dishId={id} className={styles.dish} />
      ))}
    </div>
  );
};
