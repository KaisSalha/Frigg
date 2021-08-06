import Head from "next/head";
import ScrollList from "components/ScrollList";
import styles from "styles/layout/main.module.scss";

import getMain from "getters/main";

import { useArticles } from "hooks/useArticle";

import { getLayout } from "components/layouts/SiteLayout";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = ({ initialArticles }) => {
  const { articles } = useArticles(initialArticles);
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <ScrollList articles={articles} title={t("latest-articles")} />
      </main>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;

export async function getStaticProps({ locale }) {
  const initialProps = await getMain(locale);

  return {
    props: {
      ...initialProps,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
