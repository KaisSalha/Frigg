import Head from "next/head";
import Header from "../../components/Header";
import fetcher from "../../helpers/fetcher";
import ReactMarkdown from "react-markdown";

export default function ArticlePage({ article, categories, locales }) {
  return (
    <>
      <Header categories={categories} locales={locales} />
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <ReactMarkdown children={article.body} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const article = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/first-article`
  );

  const categories = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`
  );

  const locales = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`
  );

  return { props: { article, categories, locales }, revalidate: 60 };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}
