// React
import { useEffect, useRef } from "react";
// React

export const useIsFirst = () => {
  const isFirst = useRef<boolean>(false);
  useEffect(() => {
    isFirst.current = true;
    return () => {
      isFirst.current = true;
    };
  }, []);
  return [isFirst];
};
