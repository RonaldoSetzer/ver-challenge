import { useEffect, useState, useRef } from "react";

function useLoadingTimer(isLoading: boolean) {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
      startTimeRef.current = Date.now();

      intervalRef.current = window.setInterval(() => {
        if (startTimeRef.current) {
          const currentTime = Date.now();
          const elapsedMilliseconds = currentTime - startTimeRef.current;
          setElapsedTime(elapsedMilliseconds);
        }
      }, 10);
    } else {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isLoading]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMilliseconds = String(milliseconds % 1000).padStart(3, "0").substring(0, 2);
    return `${formattedSeconds}:${formattedMilliseconds}`;
  };

  return { elapsedTime, formattedTime: formatTime(elapsedTime) };
}
export default useLoadingTimer;
