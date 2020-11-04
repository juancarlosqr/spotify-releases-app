import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://developer.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by the <span>Spotify API</span>.
      </a>
      &nbsp;
      <p>
        Logo, colors and all stuff belongs to Spotify (please do not sue me 🙏🏼)
      </p>
    </footer>
  );
}
