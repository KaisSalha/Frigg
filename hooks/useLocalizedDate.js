import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useLocalizedDate(idate) {
  const [date, setDate] = useState(null);
  const { locale } = useRouter();
  const l = locale == "ar" ? "ar-EG" : "en-US";

  useEffect(() => {
    setDate(
      new Date(idate)
        .toLocaleDateString(l, {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        })
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/")
    );
  }, [idate]);

  return date;
}
