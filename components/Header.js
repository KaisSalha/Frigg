import Link from "next/link";
import { useRouter } from "next/router";
import { nav, left, right } from "styles/components/Header.module.scss";
import LocaleDropdown from "components/LocaleDropdown";

export default function Header({ categories }) {
  const router = useRouter();
  const { locale, locales } = router;

  return (
    <nav className={nav}>
      <section className={left}>
        <Link href={"/"}>
          <img
            class="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
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
  );
}
