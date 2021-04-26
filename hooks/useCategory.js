import useSWR from "swr";
import fetcher from "../helpers/fetcher";

export default function useCategory(slug, initialData) {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories/${slug}`;
  const { data } = useSWR(endpoint, fetcher, {
    initialData
  });

  return {
    category: data
  };
}

export function useCategories(initialData) {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`;
  const { data } = useSWR(endpoint, fetcher, {
    initialData
  });

  return {
    categories: data
  };
}
