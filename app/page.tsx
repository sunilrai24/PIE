import styles from "./page.module.scss";
import bannerImage from "./assets/banner.png";
import pieCardLogo from "./assets/vector.svg";
import pieCardLogo1 from "./assets/vector1.svg";
import pieCardLogo2 from "./assets/vector2.svg";
import businessImage from "./assets/businesslogo.png";
import businessImage1 from "./assets/businesslogo1.png";
import businessImage2 from "./assets/businesslogo2.png";
import drivenImage from "./assets/driven1.svg";
import drivenImage1 from "./assets/driven2.svg";
import drivenImage2 from "./assets/driven3.svg";
import drivenImage3 from "./assets/driven4.svg";

import Image from "next/image";
import Header from "./components/common/Header";
import HeroBanner from "./components/HeroBanner";
import SaveTimeBy from "./components/SaveTimeBy";
import WhyChoose from "./components/WhyChoose";
import EmpowerBusiness from "./components/EmpowerBusiness";
import DataDrivenInsights from "./components/DataDriven";
import Mentors from "./components/Mentors";
import Testimonials from "./components/Testimonials";
import Support from "./components/Support";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* <div className={styles.leftSection}>
          <span>100%</span> Transparent
        </div>
        <div className={styles.centerSection}> */}
        <HeroBanner />
        <SaveTimeBy />
        <WhyChoose />
        <EmpowerBusiness />
        <DataDrivenInsights />
        <Mentors />
        <Testimonials />
        <Support />
       
       
        <section className="our-team"></section>
        {/* </div>
        <div className={styles.rightSection}>
          <span>100%</span> Truthful
        </div> */}
      </main>
      <Footer />
    </>
  );
}
