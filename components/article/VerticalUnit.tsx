import Link from "next/link";
import styles from "styles/components/article/Vertical.module.scss";
import LocalizedDate from "components/LocalizedDate";

import Image from "next/image";

import { Article } from "types";

interface Props {
  article: Article;
}

export default function ScrollUnit({ article }: Props) {
  return (
    <Link href={`/${article.category.slug}/${article.slug}`} passHref>
      <a>
        <article>
          <div className={styles.hero}>
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
                article.assets.find(asset => asset.asset_type.slug === "hero")
                  ?.cdn_url
              }`}
              layout="fixed"
              width={300}
              height={200}
              alt="test"
            />
          </div>
          <section>
            <header>
              <h2>{article.title}</h2>
            </header>
            <p>{article.lead}</p>
          </section>
        </article>
      </a>
    </Link>
  );
}
