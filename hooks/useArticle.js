import useSWR from "swr";
import fetcher from "../helpers/fetcher";

export default function useArticle(slug, initialData) {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/${slug}`;
  const { data } = useSWR(endpoint, fetcher, {
    initialData
  });

  return {
    article: data
  };
}

export function useArticles(initialData, locale_ref, category_id = null) {
  const query =
    `?locale_ref=${locale_ref}` + category_id ? `&category=${category_id}` : "";

  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/${query}`;
  const { data } = useSWR(endpoint, fetcher, {
    initialData
  });

  return {
    articles: data
  };
}
