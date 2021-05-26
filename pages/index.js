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
          <div className="mx-auto container relative px-6 py-7 xl:px-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center pb-40">
              <div className="xl:mt-8">
                <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold">
                  <h1 className="lg:text-7xl leading-tight mt-3 lg:mt-4">
                    Welcome to Canada!
                  </h1>
                </div>
                <h2 className="text-base lg:text-lg tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
                  The best guide, without leaving your home. We provide
                  everything you need to stay assimilate in your new home!
                </h2>
              </div>
              <div className="w-full custom-height mt-8 lg:mt-0 rounded-3xl relative">
                <img src="https://i.ibb.co/dLsYS9C/Group-1.png" alt="Group-1" />
              </div>
            </div>
          </div>

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
