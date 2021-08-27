import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useLocalizedDate(
  idate: Date,
  numeric: boolean = true
): string {
  const [date, setDate] = useState<string>("");
  const { locale } = useRouter();
  const l = locale == "ar" ? "ar-EG" : "en-US";

  useEffect(() => {
    const newDate = numeric
      ? new Date(idate)
          .toLocaleDateString(l, {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          })
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("/")
      : new Date(idate).toLocaleDateString(l, {
          year: "numeric",
          month: "long",
          day: "numeric"
        });

    setDate(newDate);
  }, [idate]);

  return date;
}
