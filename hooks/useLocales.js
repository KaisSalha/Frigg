import useSWR from "swr";
import fetcher from "../helpers/fetcher";

export default function useLocales(initialData) {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`;
  const { data } = useSWR(endpoint, fetcher, {
    initialData
  });

  return {
    locales: data
  };
}
