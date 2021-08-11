import styles from "styles/components/Hero.module.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero({
  image,
  title,
  description,
  position = "start",
  color = "white",
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
          shade ? styles["container--shade"] : "",
          position == "center" ? styles["container--padded"] : ""
        )}
        style={{
          textAlign: position,
          color: color
        }}
      >
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </heading>
      {shade && <div className={styles.shade} />}
    </section>
  );
}
