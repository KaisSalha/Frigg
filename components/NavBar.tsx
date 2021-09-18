import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "styles/components/Navbar.module.scss";
import LocaleDropdown from "components/LocaleDropdown";

import { Category } from "types";

interface Props {
  categories: Category[] | undefined;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ categories }: Props) {
  const router = useRouter();
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.position = opened ? "fixed" : "relative";
  }, [opened]);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const linkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: URL | string
  ) => {
    e.preventDefault();
    setOpened(false);
    router.push(href);
  };

  return (
    <header
      className={classNames(
        styles.container,
        opened ? styles["container--opened"] : ""
      )}
    >
      <nav className={styles.nav}>
        <section className={styles.left}>
          <Link href="/" passHref>
            <a>
              <Image
                className={styles.logo}
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
                width="35"
                height="35"
              />
            </a>
          </Link>
        </section>
        <section
          className={classNames(
            styles.mid,
            opened ? styles["mid--opened"] : ""
          )}
        >
          <button onClick={toggleMenu}>x</button>
          <ul>
            {categories &&
              categories.map(c => (
                <li key={c.id}>
                  <Link href={`/${c.slug}`} passHref>
                    <a>{c.name}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
        <section className={styles.right}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.menu_btn, "h-6 w-6")}
            onClick={toggleMenu}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <LocaleDropdown />
        </section>
      </nav>
    </header>
  );
}
