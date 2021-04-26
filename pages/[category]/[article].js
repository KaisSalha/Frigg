import Head from "next/head";
import Header from "../../components/Header";
import fetcher from "../../helpers/fetcher";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import useArticle from "../../hooks/useArticle";
import useLocales from "../../hooks/useLocales";
import { useCategories } from "../../hooks/useCategory";

export default function ArticlePage({
  initialArticle,
  initialCategories,
  initialLocales
}) {
  const router = useRouter();
  const slug = router.query.article;

  const { article } = useArticle(slug, initialArticle);
  const { categories } = useCategories(initialCategories);
  const { locales } = useLocales(initialLocales);

  if (article && categories) {
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
  } else {
    return "";
  }
}

export async function getStaticProps(context) {
  const slug = context.params.article;

  const initialArticle = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles/${slug}`
  );

  const initialCategories = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`
  );

  const initialLocales = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`
  );

  return {
    props: { initialArticle, initialCategories, initialLocales },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}
