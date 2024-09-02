import styles from "./Footer.module.css";

const Footer = () => {
  const more = [
    {
      id: 1,
      title: "contact",
      links: [
        { id: 30, link: "gdcchapter1@jbsoman.com" },
        { id: 31, link: "+968 95691982" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.head}>
        <div className={styles.wrapper}>
          <a href="https://www.facebook.com/profile.php?id=61562525387632&mibextid=ZbWKwL">
            <SocialIcon name={"facebook"} />
          </a>
          <a href="https://www.instagram.com/gulf_dance_championship?igsh=dnhwZWk4dDR3cDdt">
            <SocialIcon name={"instagram"} />
          </a>
          <a href="https://x.com/GDCchp1/status/1806314155424518389?t=R5grYzXDYnJibRcvwY-tTw&s=19">
            <SocialIcon name={"twitter"} />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.more}>
        <Lists />
        <img src="images/Logo-01.png.png" alt="logo" className={styles.logo} />
      </div>
    </footer>
  );

  function SocialIcon({ name }) {
    return (
      <img
        width={"50px"}
        height="auto"
        src={"images/icon-" + name + ".svg"}
        alt={name + " icon"}
        className={styles.social}
      />
    );
  }

  function Lists() {
    return more.map((list) => {
      return (
        <ul className={styles.more_list} key={list.id}>
          <li className={styles.title}>{list.title}</li>
          {list.links.map((linkTxt) => {
            return (
              <li key={linkTxt.id} className={styles.item}>
                {isEmail(linkTxt.link) ? (
                  <a
                    className={styles.redirect}
                    href={"mailto:" + linkTxt.link}
                  >
                    {linkTxt.link}
                  </a>
                ) : isPhoneNumber(linkTxt.link) ? (
                  <a
                    className={styles.redirect}
                    href={"https://wa.me/" + linkTxt.link.replace(/[^\d]/g, "")}
                  >
                    {linkTxt.link}
                  </a>
                ) : (
                  <span>{linkTxt.link}</span>
                )}
              </li>
            );
          })}
        </ul>
      );
    });
  }

  // Helper functions to determine if the link is email or phone number
  function isEmail(link) {
    return link.includes("@");
  }

  function isPhoneNumber(link) {
    // This assumes link is a phone number with international format or leading plus sign
    return link.match(/^\+?\d+$/) !== null;
  }
};

export default Footer;
