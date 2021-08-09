import styles from "styles/components/Hero.module.scss";

export default function Hero({ image, title, description }) {
  return (
    <section
      className={styles.main}
      style={{
        backgroundImage: image
      }}
    >
      <heading className={styles.container}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </heading>
    </section>
  );
}
