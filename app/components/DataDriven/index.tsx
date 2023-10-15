import Image from "next/image";
import styles from "./Datadriven.module.scss";
import drivenCardImgaes1 from "../../assets/driven1.svg";
import drivenCardImgaes2 from "../../assets/driven2.svg";
import drivenCardImgaes3 from "../../assets/driven3.svg";
import drivenCardImgaes4 from "../../assets/driven4.svg";

export default function DataDrivenInsights() {
  return (

      <section className={styles.dataDrivenInsights}>
       
          <div className={styles.dataDrivenHeading}>
            Why Data-Driven Insights are Your Business's North Star
          </div>
          <div className={styles.dataDrivenSubHeading}>
            In today's dynamic marketplace, data-driven insights are your
            guiding star. They empower you to:
          </div>
          <div className={styles.dataDrivenCards}>
            <div className={styles.drivenCard}>
              <div className={styles.dataDrivenLogo}>
                <Image
                  src={drivenCardImgaes1}
                  alt="Driven logo"
                  width={60}
                  height={64}
                />
              </div>
              <div className={styles.dataDrivenCardText}> Product Development</div>
              <div className={styles.dataDrivenCardSubText}>
                Tailor your products or services with unparalleled precision,
                addressing the specific needs of your customers.
              </div>
            </div>
            <div className={styles.drivenCard}>
              <div className={styles.dataDrivenLogo}>
                <Image
                  src={drivenCardImgaes2}
                  alt="Driven logo"
                  width={60}
                  height={64}
                />
              </div>
              <div className={styles.dataDrivenCardText}> Product Development</div>
              <div className={styles.dataDrivenCardSubText}>
                Tailor your products or services with unparalleled precision,
                addressing the specific needs of your customers.
              </div>
            </div>
            <div className={styles.drivenCard}>
              <div className={styles.dataDrivenLogo}>
                <Image
                  src={drivenCardImgaes3}
                  alt="Driven logo"
                  width={60}
                  height={64}
                />
              </div>
              <div className={styles.dataDrivenCardText}> Product Development</div>
              <div className={styles.dataDrivenCardSubText}>
                Tailor your products or services with unparalleled precision,
                addressing the specific needs of your customers.
              </div>
            </div>
            <div className={styles.drivenCard}>
              <div className={styles.dataDrivenLogo}>
                <Image
                  src={drivenCardImgaes4}
                  alt="Driven logo"
                  width={60}
                  height={64}
                />
              </div>
              <div className={styles.dataDrivenCardText}> Product Development</div>
              <div className={styles.dataDrivenCardSubText}>
                Tailor your products or services with unparalleled precision,
                addressing the specific needs of your customers.
              </div>
            </div>
          </div>
      </section>
  );
}
