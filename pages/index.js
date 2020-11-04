import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Index() {
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
            <h3>Connect 🎸</h3>
            <p>
              Login with your Spotify account to check the latest releases from
              Spotify.
            </p>
          </a>

          <Link href="/sponsors">
            <a className={styles.card}>
              <h3>Sponsors 🎭</h3>
              <p>
                Amazing companies and individuals that are paying our bills!
              </p>
            </a>
          </Link>

          <a href="/so-so-sad" className={styles.card}>
            <h3>404 🚫</h3>
            <p>We all have been there at least once in our lives. So so sad!</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
