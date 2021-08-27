import useSWR from "swr";
import fetcher from "helpers/fetcher";

import { Category } from "types/index";

export default function useCategory(
  slug: string,
  initialData: Category
): { category: Category | undefined } {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories/${slug}`;
  const { data: category } = useSWR<Category>(endpoint, fetcher, {
    initialData
  });

  return {
    category
  };
}

export function useCategories(initialData: Category[]): {
  categories: Category[] | undefined;
} {
  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`;
  const { data: categories } = useSWR<Category[]>(endpoint, fetcher, {
    initialData
  });

  return {
    categories
  };
}
