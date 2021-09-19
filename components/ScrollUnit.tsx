import Link from "next/link";
import styles from "styles/components/Scroll.module.scss";

import LocalizedDate from "components/LocalizedDate";

import { Article } from "types";

interface Props {
  article: Article;
}

export default function ScrollUnit({ article }: Props) {
  return (
    <Link href={`/${article.category.slug}/${article.slug}`} passHref>
      <a className={styles.item}>
        <section
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
              article.assets.find(asset => asset.asset_type.slug === "hero")
                ?.cdn_url
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
                <LocalizedDate date={article.updated_at} />
              </p>
            </footer>
          </article>
        </section>
      </a>
    </Link>
  );
}
