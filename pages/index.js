import Head from "next/head";
import styles from "../styles/Home.module.css";
import ArticlesList from "../components/ArticlesList";
import fetcher from "../helpers/fetcher";

import { useArticles } from "../hooks/useArticle";

import { getLayout } from "../components/layouts/SiteLayout";

const Home = ({ initialArticles }) => {
  const { articles } = useArticles(initialArticles);

  return (
    <>
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
};

Home.getLayout = getLayout;

export default Home;

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
