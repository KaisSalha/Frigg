import Link from "next/link";
import styles from "styles/components/Scroll.module.scss";
import useLocalizedDate from "hooks/useLocalizedDate";

const ScrollUnit = ({ article }) => {
  return (
    <Link href={`${article.category.slug}/${article.slug}`}>
      <section
        className={styles.item}
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
            article.assets.find(asset => asset.asset_type.slug === "hero")
              .cdn_url
          }')`
        }}
      >
        <article className={styles.content}>
          <header>
            <p className={styles.category}>{article.category.name}</p>
            <h2>{article.title}</h2>
          </header>
          <footer>
            <p>
              <span>{article.author.name}</span>
              <time dateTime={article.updated_at}>
                {useLocalizedDate(article.updated_at)}
              </time>
            </p>
          </footer>
        </article>
      </section>
    </Link>
  );
};

export default ScrollUnit;
