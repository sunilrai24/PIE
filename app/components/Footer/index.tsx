import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        {" "}
        <Image src="/img/logo.svg" width={83} height={80} alt="PIE Logo" />
      </div>
      <div className={styles.footerText}>
        <ul>
          <ol>
            <b>Home</b>
          </ol>
          <ol>About PIE</ol>
          <ol>Press</ol>
        </ul>
      </div>
      <div className={styles.footerText}>
        <ul>
          <ol>
            <b>Support</b>
          </ol>
          <ol>Terms of use</ol>
          <ol>Privacy Policy</ol>
          <ol>Contact Us</ol>
        </ul>
      </div>
    </div>
  );
}
