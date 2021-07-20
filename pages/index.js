import Head from "next/head";
import ArticlesList from "components/ArticlesList";

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
      <div className="container">
        <main>
          <ArticlesList articles={articles} />
        </main>
      </div>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;

export async function getStaticProps({ locale }) {
  const initialProps = await getMain(locale);

  return { props: { ...initialProps } };
}
