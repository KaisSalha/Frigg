import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import { nav, left, right } from "styles/components/Header.module.scss";

export default function Header({ categories }) {
  const router = useRouter();
  const { locale, locales } = router;

  return (
    <nav className={nav}>
      <section className={left}>
        <Link href={"/"}>
          <span>Logo</span>
        </Link>
        <section>
          <ul>
            {categories.map(c => (
              <li key={c.id}>
                <Link href={`/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className={right}>
        <span>search</span>
        <Menu>
          <Menu.Button>Locale</Menu.Button>
          <Menu.Items as="ul">
            {locales.map(l => (
              <Menu.Item key={l} as="li">
                <a href={`/${l}`}>{l}</a>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </section>
    </nav>
  );
}
