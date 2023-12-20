import { createPortal } from "react-dom";
import { useState } from "react";
import { CartModal } from "../cart-modal/component";

export const CartButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Cart</button>
      {isVisible &&
        createPortal(
          <CartModal onClose={() => setIsVisible(false)} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
