import styles from "./Features.module.css";

const Features = () => {
  // eslint-disable-next-line react/prop-types
  function IconTitleText({ icon, title, text }) {
    return (
      <div
        className={`${styles.feature} bg-transparent border border-gray-100
        0 px-10 py-16 rounded-lg shadow-lg hover:shadow-neutral-950`}
      >
        <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
        <p className={styles.subtitle}>{title}</p>
        <p className={styles.description}>{text}</p>
      </div>
    );
  }

  return (
    <section className={`${styles.features}`}>
      <h2 className={styles.titles}>About</h2>
      <h2 className={styles.title}>Gulf Dance Championship</h2>
      <div className={`${styles.wrapper} flex-col sm:flex-row
      ` }>
        <IconTitleText
          icon={"images/ripponcutting3.jpeg"}
          title={"Open to all !"}
          text={
            "Dancers from across the Gulf region and beyond are invited to compete."
          }
        />
        <IconTitleText
          icon={"images/goldendancevec.jpeg"}
          title={"Registration for ages 5 and above!"}
          text={
            "Participants who are at least 5 years old are eligible to register and   compete in the dance competition."
          }
        />
        <IconTitleText
          icon={"images/goldenpeople1.jpeg"}
          title={"Dance your way to glory!"}
          text={
            "Showcase your unique talent and passion to achieve recognition through your artistry and skills on the dance floor."
          }
        />
      </div>
    </section>
  );
};

export default Features;
