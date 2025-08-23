"use client";
import { useState } from "react";
import styles from "./SectionSeven.module.scss";
import arrow from "@/assets/arrow.svg";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const SectionSeven = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <h2 className={styles.contacTitle}>
              If you could not find the information you were looking for, call
              or contact us
            </h2>
            <div className={styles.contactInfo}>
              <div className={styles.phone}>
                <p>Phone: </p>
                <a href="tel:+998 55 502 04 04">+998 55 502 04 04</a>
              </div>
              <div className={styles.email}>
                <p>Email: </p>
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
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  className={styles.form}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2>Request a Call</h2>
                  <p className={styles.description}>
                    Fill out the application form and <br /> we will call you
                    back
                  </p>
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                    <Button label="Send request" variant="secondary" type="submit" />
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={styles.successBox}
                >
                  <h2>SUCCESSFUL</h2>
                  <p>
                    Your request has been sent, please <br /> wait. We will contact
                    you.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
