import { GetStaticProps, GetStaticPaths } from "next";
import DefaultErrorPage from "next/error";

import Head from "next/head";
import styles from "styles/pages/category.module.scss";
import Hero from "components/Hero";

import SideList from "components/SideList";

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

import VerticalList from "components/article/VerticlList";

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

  const { articles } = useArticles(initialArticles, locale, category?.id);

  const test = [
    {
      title: "Home Improvement Loan Rates",
      url: "moneywise.com"
    },
    {
      title: "Low Interest Loan Rates",
      url: "moneywise.com"
    }
  ];

  if (!category) return <DefaultErrorPage statusCode={404} />;
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
        <section className={styles.container}>
          <div className={styles.left}>
            {articles && (
              <VerticalList title={t("whatsnew")} articles={articles} />
            )}
          </div>
          <div className={styles.right}>
            <SideList title="Related Topics" links={test} />
          </div>
        </section>
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

  // @ts-ignore
  const initialCategory = await getCategory(locale, slug);

  if (!initialCategory)
    return {
      props: {},
      revalidate: 60
    };

  const initialArticles = await getArticles(locale, Number(initialCategory.id));

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
