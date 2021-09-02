import { GetStaticProps, GetStaticPaths } from "next";
import DefaultErrorPage from "next/error";

import Head from "next/head";
import ScrollList from "components/ScrollList";
import styles from "styles/layout/main.module.scss";
import Hero from "components/Hero";

import { getCategories } from "pages/api/[locale]/categories/index";
import { getArticles } from "pages/api/[locale]/articles/index";
import { getCategory } from "pages/api/[locale]/categories/[slug]";

import useCategory from "hooks/useCategory";

import { useRouter } from "next/router";
import { useArticles } from "hooks/useArticle";

import { getLayout } from "components/layouts/SiteLayout";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Article, Category } from "types";

interface Props {
  initialCategory: Category;
  initialArticles: Article[];
}

const CategoryPage = ({ initialCategory, initialArticles }: Props) => {
  const router = useRouter();
  const slug = router.query.category as string;
  const { locale = "en" } = router;

  const { t } = useTranslation("common");

  const { category } = useCategory(slug, initialCategory);

  if (!category) return <DefaultErrorPage statusCode={404} />;

  const { articles } = useArticles(initialArticles, locale, category?.id);

  return (
    <>
      <Head>
        <title>{category.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image={`url("${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${category.banner_img}")`}
        title={category.name}
        description={category.description}
        position="center"
        shade={0.6}
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

CategoryPage.getLayout = getLayout;

export default CategoryPage;

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = "en"
}) => {
  const slug = params?.category;

  const initialCategory = await getCategory(locale, slug);

  if (!initialCategory)
    return {
      props: {},
      revalidate: 60
    };

  const initialArticles = await getArticles(locale, initialCategory.id);

  const initialCategories = await getCategories(locale);

  const initialProps = { initialCategory, initialCategories, initialArticles };

  return {
    props: {
      ...initialProps,
      ...(await serverSideTranslations(locale, ["common"]))
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};
