import { useRef } from "react";
import { useEffect } from "react";

export const useMountEffect = (callback) => {
  const cleanUp = useRef(false);

  useEffect(() => {
    if (!cleanUp.current) {
      cleanUp.current = callback();

      return;
    }

    return cleanUp;
  }, []);
};
