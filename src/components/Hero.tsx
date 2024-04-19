import styles from './hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hi, Im Kevin</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}
