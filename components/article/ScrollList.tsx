import ScrollUnit from "components/article/ScrollUnit";
import styles from "styles/components/article/Scroll.module.scss";

import { Article } from "types";

interface Props {
  title: string;
  articles: Article[];
}

export default function ScrollList({ title, articles }: Props) {
  return (
    <section className={styles.container}>
      {title && <header className={styles.title}>{title}</header>}
      <section className={styles.scroll}>
        {articles.map(article => (
          <ScrollUnit article={article} key={article.id} />
        ))}
      </section>
    </section>
  );
}
