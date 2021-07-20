import { getArticles } from "pages/api/[locale]/articles/index";
import { getCategories } from "pages/api/[locale]/categories/index";

const getMain = async locale => {
  const initialArticles = await getArticles(locale);

  const initialCategories = await getCategories(locale);

  return { initialArticles, initialCategories };
};

export default getMain;
