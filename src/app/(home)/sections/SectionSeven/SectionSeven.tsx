import styles from "./SectionSeven.module.scss";
import arrow from "@/assets/arrow.svg";
import { Button } from "@/components/Button/Button";
import Image from "next/image";

export const SectionSeven = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <h1 className={styles.title}>
          Lets realize your idea <br />
          <span className={styles.box}>
            <Image src={arrow} alt="box" />
          </span>
          together!
          <br />
          <span>Contact us today</span>
        </h1>

        <div className={styles.boxes}>
          <div className={styles.contacts}>
            <h2 className={styles.contactTitle}>
              If you could not find the information you were looking for, call
              or contact us
            </h2>
            <div className={styles.contactInfo}>
              <div className={styles.phone}>
                <p>Phone: </p>{" "}
                <a href="tel:+998 55 502 04 04">+998 55 502 04 04</a>
              </div>
              <div className={styles.email}>
                <p>Email: </p>{" "}
                <a href="mailto:info@fizmasoft.uz">info@fizmasoft.uz</a>
              </div>
              <div className={styles.socialIcons}>
                <span>LN</span>
                <span>TL</span>
                <span>IN</span>
                <span>FB</span>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <h2>Request a Call</h2>
            <p className={styles.description}>
              Fill out the application form and <br /> we will call you back
            </p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <Button label="Send request" variant="secondary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
