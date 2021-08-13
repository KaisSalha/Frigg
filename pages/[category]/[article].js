import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Image from "next/image";

import { getArticle } from "pages/api/[locale]/articles/[slug]";
import { getCategories } from "pages/api/[locale]/categories/index";

import useArticle from "hooks/useArticle";
import { getLayout } from "components/layouts/SiteLayout";

import styles from "styles/pages/article.module.scss";

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
        <article className={styles.main}>
          <header>
            <div>{article.category.name}</div>
            <h1>{article.title}</h1>
          </header>
          <Image
            width={10}
            height={5}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
              article.assets.find(asset => asset.asset_type.slug === "hero")
                .cdn_url
            }`}
          />
          <section className={styles.article}>
            <p>{article.lead}</p>
            <ReactMarkdown children={article.body} />
          </section>
        </article>
      </main>
    </>
  );
};

ArticlePage.getLayout = getLayout;
ArticlePage.settings = {
  header: {
    floating: false,
    shadow: false,
    dark: true
  }
};

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
