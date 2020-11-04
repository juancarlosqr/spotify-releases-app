import styles from '../styles/Home.module.css';

export default function () {
  return (
    <footer className={styles.footer}>
      <a href="developer.spotify.com" target="_blank" rel="noopener noreferrer">
        Powered by the <span>Spotify API</span>
      </a>
    </footer>
  );
}
