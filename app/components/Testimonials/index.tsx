import Image from "next/image";
import styles from "./Textimonials.module.scss";
import cardImage from "../../assets/TestimonialCardImage1.jpeg";
import cardImage1 from "../../assets/TestimonialCardImage2.png";
import cardIcon from "../../assets/TestimonialIcon.svg";
import nextButton from "../../assets/TestimonialPrevIcon.svg";
import prevButton from "../../assets/TestimonialNextIcon.svg";

export default function Testimonials() {
  return (
    <section className={styles.testiMonials}>
      <div className={styles.testiMonialsHeader}>Testimonials</div>
      <div className={styles.testiMonialsCardSection}>
        <div className={styles.testiMonialsCards}>
          <div className={styles.testiMonialsCardMain}>
            <div className={styles.testiMonialsImage}>
              <div className={styles.testiMonialsImageText}>
                <Image
                  src={cardImage}
                  alt="Testimonials Card images"
                  width={65}
                  height={70}
                />
              </div>
              <div className={styles.testiMonialsCardText}>
                <div className={styles.testiMonialsName}> Jenny Wilson</div>
                <div className={styles.testiMonialsDesignation}>
                  UI-UX Designer
                </div>
              </div>
            </div>
            <div className={styles.testiMonialsIcon}>
              <Image
                src={cardIcon}
                alt="Testimonials Card Icon"
                width={44}
                height={32}
              />
            </div>
          </div>
          <div className={styles.testiMonialsCardBio}>
            “Being able to look at feedback in one central location has been
            huge for us, PIE essentially allowed me to analyze data without
            bothering our data team.
          </div>
          <div className={styles.testiMonialsCardSubBio}>
            Being able to look at feedback in one central location has been huge
            for us.
          </div>
        </div>
        <div className={styles.testiMonialsCards}>
          <div className={styles.testiMonialsCardMain}>
            <div className={styles.testiMonialsImage}>
              <div className={styles.testiMonialsImageText}>
                <Image
                  src={cardImage1}
                  alt="Testimonials Card images"
                  width={65}
                  height={70}
                />
              </div>
              <div className={styles.testiMonialsCardText}>
                <div className={styles.testiMonialsName}> Jenny Wilson</div>
                <div className={styles.testiMonialsDesignation}>
                  UI-UX Designer
                </div>
              </div>
            </div>
            <div className={styles.testiMonialsIcon}>
              <Image
                src={cardIcon}
                alt="Testimonials Card Icon"
                width={44}
                height={32}
              />
            </div>
          </div>
          <div className={styles.testiMonialsCardBio}>
            “Being able to look at feedback in one central location has been
            huge for us, PIE essentially allowed me to analyze data without
            bothering our data team.
          </div>
          <div className={styles.testiMonialsCardSubBio}>
            Being able to look at feedback in one central location has been huge
            for us.
          </div>
        </div>
      </div>
      <div className={styles.testiMonialsButton}>
        <div className={styles.testiMonialsPrev}>
          <Image
            src={prevButton}
            alt="Testimonials Card images"
            width={24}
            height={24}
          />
        </div>

        <div className={styles.testiMonialsNext}>
          <Image
            src={nextButton}
            alt="Testimonials Card images"
            width={24}
            height={24}
          />
        </div>
      </div>
    </section>
  );
}
