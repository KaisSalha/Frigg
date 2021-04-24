import Head from "next/head";
import Header from "../../components/Header";
import fetcher from "../../helpers/fetcher";

export default function CategoryPage({ category, categories, locales }) {
  return (
    <div
      className="relative bg-center bg-cover h-auto w-screen min-h-3/4"
      style={{
        backgroundImage: `url("${process.env.NEXT_PUBLIC_AWS_ENDPOINT_URL}/${category.banner_img}")`
      }}
    >
      <div className="z-10 absolute inset-0 bg-black opacity-75" />
      <div className="z-20 relative">
        <Header categories={categories} locales={locales} />
        <Head>
          <title>{category.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="relative py-16 overflow-hidden">
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const category = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories/banking`
  );

  const categories = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`
  );

  const locales = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`
  );

  return { props: { category, categories, locales }, revalidate: 60 };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}
