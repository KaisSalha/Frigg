import styles from "styles/components/Hero.module.scss";

interface Props {
  image: string;
  title: string;
  description: string;
  position?: string;
  color?: string;
  shade?: false | number;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Hero({
  image,
  title,
  description,
  position = "start",
  color = "white",
  shade = false
}: Props) {
  return (
    <section
      className={styles.main}
      style={{
        backgroundImage: image
      }}
    >
      <header
        className={classNames(
          styles.container,
          position == "center" ? styles["container--padded"] : ""
        )}
        style={{
          //@ts-ignore
          textAlign: position,
          color: color
        }}
      >
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </header>
      {shade && (
        <div
          className={styles.shade}
          style={{
            //@ts-ignore
            opacity: shade
          }}
        />
      )}
    </section>
  );
}
