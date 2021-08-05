import Head from "next/head";
import ArticlesList from "components/ArticlesList";
import ScrollList from "components/ScrollList";
import styles from "styles/layout/main.module.scss";

import getMain from "getters/main";

import { useArticles } from "hooks/useArticle";

import { getLayout } from "components/layouts/SiteLayout";

const Home = ({ initialArticles }) => {
  const { articles } = useArticles(initialArticles);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <ScrollList articles={articles} title="Latest Articles" />
        {/* <ArticlesList articles={articles} /> */}
      </main>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;

export async function getStaticProps({ locale }) {
  const initialProps = await getMain(locale);

  return { props: { ...initialProps } };
}
