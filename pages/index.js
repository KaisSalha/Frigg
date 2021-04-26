import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ArticlesList from "../components/ArticlesList";
import fetcher from "../helpers/fetcher";

import useLocales from "../hooks/useLocales";
import { useCategories } from "../hooks/useCategory";
import { useArticles } from "../hooks/useArticle";

export default function Home({
  initialArticles,
  initialCategories,
  initialLocales
}) {
  const { articles } = useArticles(initialArticles);
  const { categories } = useCategories(initialCategories);
  const { locales } = useLocales(initialLocales);

  return (
    <>
      <Header categories={categories} locales={locales} />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <ArticlesList articles={articles} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const initialArticles = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles`
  );

  const initialCategories = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`
  );

  const initialLocales = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`
  );

  return { props: { initialArticles, initialCategories, initialLocales } };
}
