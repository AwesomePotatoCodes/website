import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" Next.js className={styles.logo} /> for you
      </footer>
    </>
  )
}
