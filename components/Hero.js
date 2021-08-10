import styles from "styles/components/Hero.module.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero({
  image,
  title,
  description,
  position = "left",
  dark = false,
  shade = false
}) {
  return (
    <section
      className={styles.main}
      style={{
        backgroundImage: image
      }}
    >
      <heading
        className={classNames(
          styles.container,
          shade ? styles["container--shade"] : ""
        )}
        style={{
          textAlign: position,
          color: dark ? "black" : "white"
        }}
      >
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </heading>
      {shade && <div className={styles.shade} />}
    </section>
  );
}
