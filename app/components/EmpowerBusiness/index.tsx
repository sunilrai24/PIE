import Image from "next/image";
import styles from "./EmpowerBusiness.module.scss";
import businessLogo from "../../assets/businesslogo.png"
import businessLogo1 from "../../assets/businesslogo1.png"
import businessLogo2 from "../../assets/businesslogo2.png"


export default function EmpowerBusiness() {
  return (
    <section className={styles.empowerBusiness}>
      <div className={styles.pieBussiness}>
        <div className={styles.businessHeader}>
          How PIE Empowers Businesses
        </div>
        <div className={styles.businessSubHeader}>
          Our solution is more than a tool; it's a force multiplier:
        </div>
        <div className={styles.businessImageText}>
          <div>
            <div className={styles.businessText}>Data Harmonization</div>
            <div className={styles.businessSubText}>
              We seamlessly gather data from multiple sources, harmonizing it
              into a symphony of insights.
            </div>
          </div>
          <div className={styles.businessImage}>
            <Image
              src={businessLogo}
              alt="Pie Card Logo"
              width={500}
              height={365}
            />
          </div>
        </div>
        <div className={styles.businessImageText}>
          <div className={styles.businessImage2}>
            <Image
              src={businessLogo1}
              alt="Pie Card Logo"
              width={500}
              height={365}
            />
          </div>
          <div className={styles.businesstext2}>
            <div className={styles.businessText}>AI Insights Augmentation</div>
            <div className={styles.businessSubText}>
              Our advanced AI algorithms augment your decision-making process by
              revealing trends, patterns, and actionable insights hidden within
              your data.
            </div>
          </div>
        </div>
        <div className={styles.businessImageText}>
          <div>
            <div className={styles.businessText}>Strategic Empowerment</div>
            <div className={styles.businessSubText}>
              Armed with these insights, you gain the power to make informed
              decisions that drive growth, enhance customer relationships, and
              increase profitability.
            </div>
          </div>
          <div className={styles.businessImage}>
            <Image
              src={businessLogo2}
              alt="Pie Card Logo"
              width={500}
              height={365}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
