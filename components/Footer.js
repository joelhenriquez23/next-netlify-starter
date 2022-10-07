import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
      </footer>
    </>
  )
}
