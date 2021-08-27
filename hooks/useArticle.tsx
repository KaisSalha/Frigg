import useSWR from "swr";
import fetcher from "helpers/fetcher";

import { Article } from "types/index";

export default function useArticle(
  slug: string,
  initialData: Article
): { article: Article | undefined } {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/${slug}`;
  const { data: article } = useSWR<Article>(endpoint, fetcher, {
    initialData
  });

  return {
    article
  };
}

export function useArticles(
  initialData: Article[],
  locale_ref: string,
  category_id: number | null = null
): { articles: Article[] | undefined } {
  const query =
    `?locale_ref=${locale_ref}` + category_id ? `&category=${category_id}` : "";

  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/${query}`;
  const { data: articles } = useSWR<Article[]>(endpoint, fetcher, {
    initialData
  });

  return {
    articles
  };
}
