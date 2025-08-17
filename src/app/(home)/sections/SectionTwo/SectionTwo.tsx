"use client";
import { useState, FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./SectionTwo.module.scss";

// Assets
import man from "@/assets/man.png";
import webImg from "@/assets/web.png";
import androidImg from "@/assets/android.png";
import iosImg from "@/assets/ios.png";
import desktopImg from "@/assets/desktop.png";
import serverImg from "@/assets/server.png";
import aiImg from "@/assets/ai.png";
import arrow from "@/assets/arrow.svg";
import smart from "@/assets/smart.jpg";

interface ServiceCard {
  img: StaticImageData;
  title: string;
  desc: string;
  radius: string;
}

export const SectionTwo: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services: ServiceCard[] = [
    {
      img: webImg,
      title: "Web Development",
      desc: "We offer various web services, including website design, plugin creation, and front/back-end application updates.",
      radius: "20px 0 0 20px",
    },
    {
      img: androidImg,
      title: "Android Development",
      desc: "iParent is one of the best projects of our android developers. Besides making service, providing applications.",
      radius: "0 20px 0 20px",
    },
    {
      img: iosImg,
      title: "iOS Development",
      desc: "Our iOS developers create apps to meet customers' specific needs and work in iOS like professionals.",
      radius: "20px 20px 20px 0",
    },
    {
      img: desktopImg,
      title: "Desktop Development",
      desc: "We can offer several types of web-services which includes designing web-site, creating plugins and changing front/back.",
      radius: "20px 20px 0 20px",
    },
    {
      img: serverImg,
      title: "Server Side Solutions",
      desc: "iParent is one of the best projects of our android developers. Besides making service, providing applications.",
      radius: "0 0 20px 0",
    },
    {
      img: aiImg,
      title: "AI Solutions",
      desc: "Our AI experts develop intelligent systems to solve problems, automate processes, and deliver smart, data-driven results.",
      radius: "0 20px 20px 20px",
    },
  ];
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.slider}>
          <div className={styles.imageContainer}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`${styles.slice} ${
                  activeIndex === i ? styles.active : ""
                }`}
                onClick={() => handleClick(i)}
              >
                <Image
                  src={smart}
                  alt="Man working"
                  className={styles.sliceImg}
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container_custom">
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <div className={styles.header}>
                <div className={styles.left}>
                  <h2 id="services-heading" className={styles.title}>
                    MAIN <br />
                    <span>SERVICES</span> WE <br />
                    PROVIDE
                  </h2>
                  <span className={styles.box}>
                    <Image
                      src={arrow}
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>

              <div className={styles.grid}>
                {services.map((service, idx) => (
                  <article
                    className={styles.card}
                    key={`service-${idx}`}
                    style={{ borderRadius: service.radius }}
                  >
                    <div className={styles.imgWrap}>
                      <Image
                        src={service.img}
                        alt=""
                        width={80}
                        height={80}
                        className={styles.serviceIcon}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
