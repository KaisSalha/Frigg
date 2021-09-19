import Link from "next/link";
import styles from "styles/components/Footer.module.scss";

export default function Footer() {
  const links = [
    {
      text: "Sitemap",
      url: "https://google.com"
    },
    {
      text: "About",
      url: "https://google.com"
    },
    {
      text: "Privacy",
      url: "https://google.com"
    },
    {
      text: "Terms",
      url: "https://google.com"
    },
    {
      text: "Advertising",
      url: "https://google.com"
    },
    {
      text: "Jobs",
      url: "https://google.com"
    }
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <a
            href="https://facebook.com/lifehacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.facebook} ${styles.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                aria-label="Facebook icon"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M17 9.05A8.02 8.02 0 0 0 9 1C4.58 1 1 4.6 1 9.05A8.04 8.04 0 0 0 7.75 17v-5.62H5.72V9.05h2.03V7.28c0-2.02 1.2-3.14 3.02-3.14.88 0 1.8.16 1.8.16v1.98h-1.02c-.99 0-1.3.62-1.3 1.26v1.5h2.22l-.36 2.34h-1.86V17A8.04 8.04 0 0 0 17 9.05"
                ></path>
              </svg>
            </button>
          </a>
        </li>
        <li>
          <a
            className="sc-1out364-0 hMndXN js_link"
            href="https://twitter.com/lifehacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.twitter} ${styles.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                aria-label="Twitter icon"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M12.46 1.13c-2.04 0-3.7 1.78-3.7 3.97 0 .31.04.62.1.9a10.26 10.26 0 0 1-7.6-4.15A4.2 4.2 0 0 0 2.4 7.16a3.5 3.5 0 0 1-1.68-.5v.05a3.92 3.92 0 0 0 2.97 3.9 3.45 3.45 0 0 1-1.67.07 3.74 3.74 0 0 0 3.45 2.76A7.08 7.08 0 0 1 0 15.1a9.92 9.92 0 0 0 5.66 1.79c6.8 0 10.5-6.06 10.5-11.32v-.51A7.85 7.85 0 0 0 18 2.99c-.66.32-1.37.53-2.12.63a3.95 3.95 0 0 0 1.62-2.2c-.71.45-1.5.78-2.34.96a3.57 3.57 0 0 0-2.7-1.25"
                ></path>
              </svg>
            </button>
          </a>
        </li>
        <li>
          <a
            className="sc-1out364-0 hMndXN js_link"
            href="https://instagram.com/lifehackerdotcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.instagram} ${styles.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                aria-label="Instagram icon"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M9.94 1c1.34 0 1.64.02 2.35.05.86.04 1.44.18 1.95.37.52.2.97.48 1.41.93.45.44.72.89.93 1.41.2.51.33 1.1.37 1.95.03.74.04 1.04.04 2.56v1.46c0 1.52 0 1.82-.04 2.57a5.87 5.87 0 0 1-.37 1.94c-.2.53-.48.97-.93 1.42a3.9 3.9 0 0 1-1.41.92c-.51.2-1.1.33-1.95.37-.74.04-1.04.05-2.56.05H8.27c-1.52 0-1.82-.01-2.57-.05a5.87 5.87 0 0 1-1.94-.37 3.94 3.94 0 0 1-2.34-2.34 5.8 5.8 0 0 1-.37-1.94A42.4 42.4 0 0 1 1 9.94V8.06c0-1.34.02-1.64.05-2.35.04-.86.17-1.44.37-1.95a4.06 4.06 0 0 1 2.34-2.34 5.8 5.8 0 0 1 1.94-.37 42.4 42.4 0 0 1 2.36-.04zm-.45 1.45H8.5c-1.68 0-1.96 0-2.73.04-.78.04-1.2.17-1.49.28-.37.14-.64.32-.92.6-.28.28-.45.54-.6.92-.1.28-.24.7-.27 1.48a47.4 47.4 0 0 0-.05 2.74v.99c0 1.68.01 1.96.05 2.73.03.78.16 1.2.27 1.49.15.37.32.64.6.92.28.28.55.45.92.6.28.1.7.24 1.49.27.73.04 1.02.05 2.51.05h1.43c1.5 0 1.78-.01 2.52-.05.78-.03 1.2-.16 1.48-.27.38-.15.64-.32.92-.6.28-.28.46-.55.6-.92.11-.28.24-.7.28-1.49.03-.73.04-1.02.04-2.51V8.29c0-1.5 0-1.78-.04-2.52a4.42 4.42 0 0 0-.28-1.48 2.48 2.48 0 0 0-.6-.92 2.48 2.48 0 0 0-.92-.6c-.28-.11-.7-.24-1.48-.28a47.4 47.4 0 0 0-2.74-.04zM9 4.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm0 1.44a2.67 2.67 0 1 0 0 5.33 2.67 2.67 0 0 0 0-5.33zm4.28-2.57a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92z"
                ></path>
              </svg>
            </button>
          </a>
        </li>
        <li>
          <a
            className="sc-1out364-0 hMndXN js_link"
            href="https://www.youtube.com/user/lifehacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.youtube} ${styles.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                aria-label="Youtube icon"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M9.38 3c1.3 0 5.47.06 6.65.37.78.2 1.39.8 1.6 1.56.33 1.23.37 3.66.37 4.16v.19c0 .5-.04 2.93-.38 4.16A2.2 2.2 0 0 1 16.03 15c-1.33.35-6.45.37-6.99.37h-.09c-.53 0-5.65-.02-6.98-.37-.78-.2-1.39-.8-1.6-1.56A21.13 21.13 0 0 1 0 9.35v-.33c0-.62.05-2.9.38-4.09a2.2 2.2 0 0 1 1.59-1.56C3.15 3.06 7.33 3 8.62 3zM7.2 6.53v5.3l4.68-2.64L7.2 6.53z"
                ></path>
              </svg>
            </button>
          </a>
        </li>
        <li>
          <a
            className="sc-1out364-0 hMndXN js_link"
            href="/rss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.rss} ${styles.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                aria-label="RSS icon"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M2.97 14.07a.97.97 0 1 1 0 1.93.97.97 0 0 1 0-1.93zm.5-6.25c4 .28 7 3.74 6.72 7.73a.48.48 0 0 1-.96-.07 6.27 6.27 0 0 0-6.7-6.7.48.48 0 0 1-.06-.96 7.3 7.3 0 0 1 1 0zm-.05-5.81c7.2.25 12.82 6.28 12.57 13.48a.48.48 0 1 1-.96-.04A12.07 12.07 0 0 0 2.5 2.97a.48.48 0 0 1-.04-.96h.96z"
                ></path>
              </svg>
            </button>
          </a>
        </li>
      </ul>
      <ul className={styles.links}>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.url} passHref>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <small>
        &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}
      </small>
    </footer>
  );
}
