import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ArticlesList from "../components/ArticlesList";
import fetcher from "../helpers/fetcher";

export default function Home({ articles, categories, locales }) {
  return (
    <>
      <Header categories={categories} locales={locales} />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <ArticlesList articles={articles} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const articles = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/articles`
  );

  const categories = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/categories`
  );

  const locales = await fetcher(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/locales`
  );

  return { props: { articles, categories, locales } };
}
