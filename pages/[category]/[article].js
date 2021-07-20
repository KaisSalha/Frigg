import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Image from "next/image";

import { getArticle } from "pages/api/[locale]/articles/[slug]";
import { getCategories } from "pages/api/[locale]/categories/index";

import useArticle from "hooks/useArticle";
import { getLayout } from "components/layouts/SiteLayout";

const ArticlePage = ({ initialArticle }) => {
  const router = useRouter();
  const slug = router.query.article;

  const { article } = useArticle(slug, initialArticle);

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-4 md:mx-auto">
            <h1 className="text-center">{article.title}</h1>
            <Image
              width={10}
              height={5}
              layout="responsive"
              src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
                article.assets.find(asset => asset.asset_type_id === 1).cdn_url
              }`}
            />
            <p>{article.lead}</p>
            <ReactMarkdown children={article.body} />
          </div>
        </div>
      </main>
    </>
  );
};

ArticlePage.getLayout = getLayout;

export default ArticlePage;

export async function getStaticProps({ params, locale }) {
  const slug = params.article;

  const initialArticle = await getArticle(locale, slug);

  const initialCategories = await getCategories(locale);

  return {
    props: { initialArticle, initialCategories },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}
