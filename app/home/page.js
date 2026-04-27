"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <h2>
          <a href="/home">GameZone</a>
        </h2>

        <div>
          <a href="/home">Home</a>
          <a href="/games">Games</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div>
        
          <h1>
            Game Finder
          </h1>

          <p className={styles.desc}>
           Search trending, action, racing, and adventure games easily.
          </p>

          <a href="/games" className={styles.btn}>
            Browse Games
          </a>
        </div>

        <div>
          <img
            src="/gamefile.jpg"
            alt="game"
            className={styles.heroImg}
          />
        </div>
      </section>
    </main>
  );
}