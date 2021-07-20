import Head from "next/head";
import { useRouter } from "next/router";

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
      <div
        className="relative flex flex-wrap content-center bg-center bg-cover h-auto w-screen min-h-3/4"
        style={{
          backgroundImage: `url("${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${category.banner_img}")`
        }}
      >
        <main>
          <div className="z-20 relative align-middle sm:px-24 md:px-36 lg:px-96 overflow-hidden">
            <div className="text-white text-center mx-auto">
              <h1 className="text-5xl	mt-6 prose-2xl mx-auto">
                {category.name}
              </h1>
              <p className="mt-6 prose-2xl mx-auto">{category.description}</p>
            </div>
          </div>
        </main>
        <div className="z-10 absolute inset-0 bg-black opacity-60" />
      </div>
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
