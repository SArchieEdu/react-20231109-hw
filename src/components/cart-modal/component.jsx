import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";
import { useState } from "react";

import styles from "./styles.module.css";

export const CartModal = ({ onClose }) => {
  return (
    <div className={styles.root} onClick={onClose}>
      <div className={styles.modal}>
        <button onClick={onClose}>Close</button>
        <CartContainer />
      </div>
    </div>
  );
};
