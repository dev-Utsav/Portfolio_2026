"use client";

import { useEffect, useState } from "react";

/** Returns a live HH:MM:SS string for the given UTC offset (e.g. 5.5 for IST). */
export function useLiveClock(offsetHours: number): string {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const local = new Date(utc + offsetHours * 3600000);
      const h = String(local.getHours()).padStart(2, "0");
      const m = String(local.getMinutes()).padStart(2, "0");
      const s = String(local.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [offsetHours]);

  return time;
}
