import { GetStaticProps } from "next";

import Head from "next/head";
import ScrollList from "components/article/ScrollList";
import Hero from "components/Hero";
import styles from "styles/layout/main.module.scss";

import getMain from "getters/main";

import { useRouter } from "next/router";
import { useArticles } from "hooks/useArticle";

import { getLayout } from "components/layouts/SiteLayout";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Article } from "types";

interface Props {
  initialArticles: Article[];
}

const Home = ({ initialArticles }: Props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale: active } = router;

  const { articles } = useArticles(initialArticles, active ?? "en");

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image={`url('${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/home/hero11.jpg')`}
        title={t("name")}
        description={t("description")}
        color="white"
        shade={0.2}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          {articles && (
            <ScrollList articles={articles} title={t("latest-articles")} />
          )}
        </div>
      </main>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  const initialProps = await getMain(locale);

  return {
    props: {
      ...initialProps,
      ...(await serverSideTranslations(locale, ["common"]))
    },
    revalidate: 60
  };
};
