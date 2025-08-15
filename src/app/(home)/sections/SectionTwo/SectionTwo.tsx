import styles from "./SectionTwo.module.scss";
import man from "@/assets/man.png";
import webImg from "@/assets/web.png";
import androidImg from "@/assets/android.png";
import iosImg from "@/assets/ios.png";
import desktopImg from "@/assets/desktop.png";
import serverImg from "@/assets/server.png";
import aiImg from "@/assets/ai.png";
import Image from "next/image";

import earth from "@/assets/earth.png";

export const SectionTwo = () => {
  const services = [
    {
      img: webImg,
      title: "Web Development",
      desc: "We offer various web services, including website design, plugin creation, and front/back-end application updates.",
      radius: "50px 0 0 50px",
    },
    {
      img: androidImg,
      title: "Android Development",
      desc: "iParent is one of the best projects of our android developers. Besides making service, providing applications.",
      radius: "0 50px 0 50px",
    },
    {
      img: iosImg,
      title: "iOS Development",
      desc: "Our iOS developers create apps to meet customers’ specific needs and work in iOS like professionals.",
      radius: "50px 50px 50px 0",
    },
    {
      img: desktopImg,
      title: "Desktop Development",
      desc: "We can offer several types of web-services which includes designing web-site, creating plugins and changing front/back.",
      radius: "50px 50px 0 50px",
    },
    {
      img: serverImg,
      title: "Server Side Solutions",
      desc: "iParent is one of the best projects of our android developers. Besides making service, providing applications.",
      radius: "0 0 50px 0",
    },
    {
      img: aiImg,
      title: "AI Solutions",
      desc: "Our AI experts develop intelligent systems to solve problems, automate processes, and deliver smart, data-driven results.",
      radius: "0 50px 50px 50p",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.content}>
          <div>
            <div className={styles.left}>
              <h2>
                MAIN <span>SERVICES</span> WE PROVIDE
              </h2>
              <button className={styles.arrowBtn}>→</button>
            </div>
            <div className={styles.grid}>
              {services.map((service, idx) => (
                <div
                  className={styles.card}
                  key={idx}
                  style={{ borderRadius: service.radius }}
                >
                  <div className={styles.imgWrap}>
                    <Image src={service.img} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className={styles.top}>
            <div className={styles.right}>
              <Image src={man} alt="man" className={styles.man} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
