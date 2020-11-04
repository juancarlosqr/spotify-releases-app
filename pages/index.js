import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Spotify</a> Releases
        </h1>

        <div className={styles.grid}>
          <a href="https://www.spotify.com/" className={styles.card}>
            <h3>Connect 🎧</h3>
            <p>
              Sign-In with your Spotify account to check the latest releases.
            </p>
          </a>

          <Link href="/sponsors">
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Sponsors 🎭</h3>
              <p>
                Amazing companies and individuals that are paying our bills!
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by the <span>Spotify API</span>
        </a>
      </footer>
    </div>
  );
}
