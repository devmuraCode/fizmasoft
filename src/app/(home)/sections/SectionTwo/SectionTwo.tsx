import { FC } from "react";
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

interface ServiceCard {
  img: StaticImageData;
  title: string;
  desc: string;
  radius: string;
}

export const SectionTwo: FC = () => {
  const services: ServiceCard[] = [
    {
      img: webImg,
      title: "Web Development",
      desc: "We offer various web services, including website design, plugin creation, and front/back-end application updates.",
      radius: "",
    },
    {
      img: androidImg,
      title: "Android Development",
      desc: "iParent is one of the best projects of our android developers. Besides making service, providing applications.",
      radius: "",
    },
    {
      img: iosImg,
      title: "iOS Development",
      desc: "Our iOS developers create apps to meet customers' specific needs and work in iOS like professionals.",
      radius: "",
    },
    {
      img: desktopImg,
      title: "Desktop Development",
      desc: "We can offer several types of web-services which includes designing web-site, creating plugins and changing front/back.",
      radius: "",
    },
    {
      img: serverImg,
      title: "Server Side Solutions",
      desc: "iParent is one of the best projects of our android developers. Besides making service, providing applications.",
      radius: "",
    },
    {
      img: aiImg,
      title: "AI Solutions",
      desc: "Our AI experts develop intelligent systems to solve problems, automate processes, and deliver smart, data-driven results.",
      radius: "",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.slider}>
          <div className={styles.imageContainer}></div>
        </div>
        {/* <svg width="0" height="0" className={styles.clipSvg}>
          <defs>
            <clipPath id="content-clip" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H0.19 V0 H0.35 V0 H0.51 V0 H0.51 V0.3 H1 V0.47 H1 V0.58 H1 V1 H0.35 V1 H0 V0.5 Z" />
            </clipPath>
          </defs>
        </svg> */}

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
                  <button
                    type="button"
                    className={styles.box}
                    aria-label="Explore services"
                  >
                    <Image
                      src={arrow}
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>

              <div className={styles.grid}>
                {services.map((service, idx) => (
                  <article className={styles.card} key={`service-${idx}`}>
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
