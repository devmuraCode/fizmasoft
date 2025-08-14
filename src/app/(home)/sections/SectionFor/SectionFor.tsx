import styles from "./SectionFor.module.scss";

export const SectionFor = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container_custom">
        <div className={styles.content}>
          <h2 className={styles.title}>
            Our<span> clients</span> are <span> successful people</span> who
            <span> entrusted</span> us with their investments and received
            <span> excellent results</span>
          </h2>
        </div>
      </div>
    </div>
  );
};