import styles from "./SaveTimeBy.module.scss";
export default function SaveTimeBy() {
  return (
    <section className={styles.savetimeby}>
      <div className={styles.pietext}>
        Our AI technology analyses your customer feedback in mere minutes,
        saving your time by
      </div>
      <div className={styles.piePerCentage}>80%</div>
    </section>
  );
}
