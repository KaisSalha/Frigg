import Head from "next/head";
import { useRouter } from "next/router";
import styles from "styles/layout/main.module.scss";
import Hero from "components/Hero";

import { getCategories } from "pages/api/[locale]/categories/index";
import { getCategory } from "pages/api/[locale]/categories/[slug]";

import useCategory from "hooks/useCategory";
import { getLayout } from "components/layouts/SiteLayout";

const CategoryPage = ({ initialCategory }) => {
  const router = useRouter();
  const slug = router.query.category;

  const { category } = useCategory(slug, initialCategory);

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
        shade={true}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* <ScrollList articles={articles} title={t("latest-articles")} /> */}
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

  const initialCategories = await getCategories(locale);

  return {
    props: { initialCategory, initialCategories },
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
