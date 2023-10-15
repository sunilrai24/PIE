import Image from "next/image";
import styles from "./HeroBanner.module.scss";
import BannerImage from "../../assets/banner.png";

export default function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.leftSection}>
        <span>100%</span> Transparent
      </div>
      <div>
        <div className={styles.centerSection}>
          <div  className={styles.centerSectionText}>
            <div className={styles.bannerHeading}>
              Understand Your Global <span>Client</span>
            </div>
            <div className={styles.bannerSubHeading}>
            <div className={styles.bannerDescription}>Stop Guessing.</div>
            <div> Doing great business starts with knowing your customers.</div>
            <div>Let us help you with that.</div>
            </div>
            <div className={styles.bannerButton}>
              <button>Book Demo</button>
            </div>
          </div>
          <div className={styles.bannerImage}>
            <Image
              src={BannerImage}
              alt="Banner Image"
              width={1210}
              height={650}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <span>100%</span> Truthful
      </div>
    </section>
  );
}
