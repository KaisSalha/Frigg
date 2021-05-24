import Head from "next/head";
import styles from "../styles/Home.module.css";
import ArticlesList from "../components/ArticlesList";

import { getArticles } from "./api/[locale]/articles/index";
import { getCategories } from "./api/[locale]/categories/index";
import { getLocales } from "./api/locales/index";

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
  const initialArticles = await getArticles("en");

  const initialCategories = await getCategories("en");

  const initialLocales = await getLocales();

  return { props: { initialArticles, initialCategories, initialLocales } };
}
