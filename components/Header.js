import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <h1 className={styles.title}>
      <a
        href="https://www.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spotify
      </a>{' '}
      Releases
    </h1>
  );
}
