import styles from "./SectionSix.module.scss";
import qayrat from "@/assets/qayrat.svg";
import azamjon from "@/assets/azamjon.svg";
import Image from "next/image";
export const SectionSix = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Our <span>friendly</span> <br /> and <span>hardworking</span> team
      </h2>
      <div className={styles.carousel}>
        <div className={styles.slide}>
          <Image src={qayrat} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            ARIF BOZOROV <span>PROJECT MANAGER</span>
          </p>
        </div>
        <div className={styles.slide}>
          <Image src={azamjon} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            AZAMJON RAHIMOV <span>CEO OF FIZMASOFT</span>
          </p>
        </div>
        <div className={styles.slide}>
          <Image src={qayrat} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            KAYRAT URAZOV <span>PROJECT MANAGER</span>
          </p>
        </div>
        <div className={styles.slide}>
          <Image src={azamjon} alt="Qayrat Bozorov" />
          <p className={styles.name}>
            SHUHRATULLO NURMUKHAMAD <span>PROJECT MANAGER</span>
          </p>
        </div>
      </div>
    </div>
  );
};
