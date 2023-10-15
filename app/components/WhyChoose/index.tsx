import Image from "next/image";
import styles from "./WhyChoose.module.scss";
import choosePieLogo from "../../assets/vector.svg";
import choosePieLogo1 from "../../assets/vector1.svg";
import choosePieLogo2 from "../../assets/vector2.svg";

export default function WhyChoose() {
  return (
    <div className={styles.whyChoosePie}>
      <div className={styles.choosePieHeader}>Why Choose PIE</div>
      <div className={styles.choosePieCard}>
        <div className={styles.whyChooseCard}>
          <div className={styles.whyChooseCardLogo}>
            <Image
              src={choosePieLogo}
              alt="Pie Card Logo"
              width={50}
              height={45}
            />
          </div>
          <div className={styles.whyChooseCardTitle}>
            Unveiling the Secrets of AI-Powered Precision
          </div>
          <div className={styles.whyChooseCardDescription}>
            Our avant-garde AI system is your key to unlocking precise and
            timely customer insights. Say goodbye to the tedious manual analysis
            of customer feedback, and embrace the future. From reviews and
            chatbot conversations to sentiment analysis, our AI outperforms
            humans, saving you countless hours and resources.
          </div>
        </div>
        <div className={styles.whyChooseCard}>
          <div className={styles.whyChooseCardLogo}>
            <Image
              src={choosePieLogo1}
              alt="Pie Card Logo"
              width={50}
              height={45}
            />
          </div>
          <div className={styles.whyChooseCardTitle}>
            Igniting Growth Through Data Brilliance
          </div>
          <div className={styles.whyChooseCardDescription}>
            Harness the brilliance of data to fuel your business growth. Our
            AI-driven dashboard is your control center, allowing you to
            effortlessly access a treasure trove of customer insights. These
            insights are not just numbers; they're your roadmap to strategic
            decisions that can reshape your business trajectory.
          </div>
        </div>
        <div className={styles.whyChooseCard}>
          <div className={styles.whyChooseCardLogo}>
            <Image
              src={choosePieLogo2}
              alt="Pie Card Logo"
              width={50}
              height={45}
            />
          </div>
          <div className={styles.whyChooseCardTitle}>
            Crafting Exceptional Customer Experiences
          </div>
          <div className={styles.whyChooseCardDescription}>
            Great businesses are built on exceptional customer experiences. At
            PIE, we provide the tools and insights you need to craft these
            experiences. Understand your customers at a profound level, identify
            pain points, and create personalized interactions that leave a
            lasting impression.
          </div>
        </div>
      </div>
    </div>
  );
}
