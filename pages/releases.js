import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Releases({ user, releases }) {
  console.log({ user, releases });

  return (
    <div className={styles.container}>
      <Head>
        <title>{user.display_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <p className={styles.buttonContainer}>
          <Link href="/">
            <a className={styles.button}>Home</a>
          </Link>
        </p>

        <p className={styles.description}>
          <code className={styles.code}>{user.uri}</code>
        </p>

        <div className={styles.grid}>
          {releases.albums.items.map((item) => (
            <section key={item.id} className={styles.item}>
              <a
                href={item.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.images[0].url}
                  height={item.images[0].height}
                  width={item.images[0].width}
                />
                <p className={styles.description}>{item.artists[0].name}</p>
              </a>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const fetchSpotifyData = (options) => {
  return Promise.all([
    fetch('https://api.spotify.com/v1/me', options),
    fetch('https://api.spotify.com/v1/browse/new-releases', options),
  ]).then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  );
};

Releases.getInitialProps = async ({ query }) => {
  try {
    const { access_token } = query;
    const options = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    const response = await fetchSpotifyData(options);
    const [user, releases] = response;
    return { user, releases };
  } catch (error) {
    return { user: null, releases: null };
  }
};
