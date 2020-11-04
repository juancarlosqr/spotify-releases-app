import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify Releases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.grid}>
          <a href="/api/login" className={styles.card}>
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

      <Footer />
    </div>
  );
}
