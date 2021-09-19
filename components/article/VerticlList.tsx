import VerticalUnit from "components/article/VerticalUnit";
import styles from "styles/components/article/Vertical.module.scss";

import { Article } from "types";

interface Props {
  title: string;
  articles: Article[];
}

export default function VerticalList({ title, articles }: Props) {
  return (
    <section className={styles.container}>
      {title && <header className={styles.title}>{title}</header>}
      <section className={styles.scroll}>
        {articles.map(article => (
          <VerticalUnit article={article} key={article.id} />
        ))}
      </section>
    </section>
  );
}
