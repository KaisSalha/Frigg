import Head from "next/head";
import Header from "../../components/Header";
import fetcher from "../../helpers/fetcher";
import { useRouter } from "next/router";

import useCategory, { useCategories } from "../../hooks/useCategory";
import useLocales from "../../hooks/useLocales";

export default function CategoryPage({
  initialCategory,
  initialCategories,
  initialLocales
}) {
  const router = useRouter();
  const slug = router.query.category;

  const { category } = useCategory(slug, initialCategory);
  const { categories } = useCategories(initialCategories);
  const { locales } = useLocales(initialLocales);

  return (
    <>
      <div>
        <Header categories={categories} locales={locales} />
        <Head>
          <title>{category.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
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
}

export async function getStaticProps(context) {
  const slug = context.params.category;

  const initialCategory = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories/${slug}`
  );

  const initialCategories = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`
  );

  const initialLocales = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`
  );

  return {
    props: { initialCategory, initialCategories, initialLocales },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}
