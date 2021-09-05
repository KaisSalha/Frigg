import { GetStaticProps, GetStaticPaths } from "next";
import DefaultErrorPage from "next/error";

import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Image from "next/image";

import { getArticle } from "pages/api/[locale]/articles/[slug]";
import { getCategories } from "pages/api/[locale]/categories/index";

import useArticle from "hooks/useArticle";
import { getLayout } from "components/layouts/SiteLayout";
import LocalizedDate from "components/LocalizedDate";

import styles from "styles/pages/article.module.scss";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Article } from "types";

interface Props {
  initialArticle: Article;
}

const ArticlePage = ({ initialArticle }: Props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const slug = router.query.article as string;

  const { article } = useArticle(slug, initialArticle);

  if (!article) return <DefaultErrorPage statusCode={404} />;

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <article className={styles.main}>
          <header>
            <div className={styles.category}>
              <a href={article.category.slug}>{article.category.name}</a>
            </div>
            <h1>{article.title}</h1>
            <section className={styles.byline}>
              <address>
                <svg
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                >
                  <path
                    fill=""
                    d="M18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L13,12 C15.7614237,12 18,14.2385763 18,17 L18,19 Z M9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 Z M9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 Z"
                  ></path>
                </svg>
                <div className={styles.author}>
                  {`${t("by")} `}
                  <a href="#" rel="author">
                    {article.author.name}
                  </a>
                  <div className={styles.position}>{article.author.bio}</div>
                </div>
              </address>
              {<LocalizedDate date={article.created_at} />}
            </section>
          </header>
          <div className={styles.hero}>
            <Image
              width={10}
              height={5}
              alt=""
              layout="responsive"
              src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
                article.assets.find(asset => asset.asset_type.slug === "hero")
                  ?.cdn_url
              }`}
            />
          </div>
          <section className={styles.article}>
            <p>{article.lead}</p>
            <ReactMarkdown>{article.body}</ReactMarkdown>
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

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = "en"
}) => {
  const slug = params?.article;

  // @ts-ignore
  const initialArticle = await getArticle(locale, slug);

  const initialCategories = await getCategories(locale);

  const initialProps = { initialArticle, initialCategories };

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
