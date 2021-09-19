import Link from "next/link";
import styles from "styles/components/SideList.module.scss";

interface Item {
  title: string;
  url: string;
}

interface Props {
  title: string;
  links: Item[];
}

export default function SideList({ title, links }: Props) {
  return (
    <section className={styles.container}>
      <header>
        <h3>{title}</h3>
      </header>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} passHref>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
