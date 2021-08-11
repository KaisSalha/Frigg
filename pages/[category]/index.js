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

const CategoryPage = ({ initialCategory, initialArticles }) => {
  const router = useRouter();
  const slug = router.query.category;

  const { t } = useTranslation("common");

  const { category } = useCategory(slug, initialCategory);
  const { articles } = useArticles(initialArticles, router.locale, category.id);

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
          <ScrollList articles={articles} title={t("latest-articles")} />
        </div>
      </main>
    </>
  );
};

CategoryPage.getLayout = getLayout;

export default CategoryPage;

export async function getStaticProps({ params, locale }) {
  const slug = params.category;

  const initialCategory = await getCategory(locale, slug);

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
}

export async function getStaticPaths({ locale }) {
  const initialCategories = await getCategories(locale);

  const paths = initialCategories.map(category => ({
    params: {
      category: category.slug
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
}
