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

export function useArticles(initialData) {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/`;
  const { data } = useSWR(endpoint, fetcher, {
    initialData
  });

  return {
    articles: data
  };
}
