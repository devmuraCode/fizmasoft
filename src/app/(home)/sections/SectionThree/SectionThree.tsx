import styles from "./SectionThree.module.scss";
import code from "@/assets/code.png";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import arrow from "@/assets/arrow.svg";
export const SectionThree = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.inner}>
        
          <div className={styles.left}>
            <div className={styles.infoCard}>
              <h2 className={styles.title}>
                FIZMASOFT, <br />
                FOUNDED IN <br />
                TASHKENT IN 2013
              </h2>
              <span className={styles.box}>
                <Image src={arrow} alt="box" />
              </span>
            </div>
            <div className={styles.imageBox}>
              <Image src={code} alt="Code example" />
            </div>
          </div>

          {/* Правая колонка */}
          <div className={styles.right}>
            <h2 className={styles.title_right}>
              FOUNDED WITH <br />
              VISION & <br />
              RESILIENCE
            </h2>
            <p>
              Azamjon Rakhimjonov created Fizmasoft team in 2013. But, due to
              some problems, team was not gathered. However, idea of Fizmasoft
              startup did not die. It was again encouraged in 2016 with four
              people.
            </p>
            <Button label="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
};
