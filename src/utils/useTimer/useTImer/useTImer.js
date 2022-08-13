import { useCallback, useState } from "react";

const useTimer = () => {
  const [loading, setLoading] = useState(true);

  const timer = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return [loading, timer, setLoading];
};
export default useTimer;
