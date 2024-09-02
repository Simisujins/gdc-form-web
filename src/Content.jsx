import React from "react";
import styles from "./Content.module.css";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  const handlePreRegisterClick = () => {
    // Navigate to the event page ("/event")
    navigate("/event");
  };

  return (
    <><div className={styles.box}>
      <div className="flex flex-col sm:flex-row justify-center text-white mx-12 sm:mx-28 max-w p-10 gap-8 sm:gap-32   border border-gray-950 rounded-lg shadow-lg hover:shadow-neutral-950" >
        <div>
          <div className={styles.content}>
            <div className={styles.intro_content}>
              <h3 className={styles.titles}>Track Your Moves!</h3>
              <h1 className={styles.title}>
                Gulf's First-Ever Dance Championship!
              </h1>
              <p className={styles.description}>
                <h3> Calling All Dancers!</h3>
                Join a groundbreaking competition celebrating the vibrant world
                of Bolly Hop and Hip Hop in the Gulf Region.
              </p>
            </div>
            <button
              className={styles.view_plans_btn}
              onClick={handlePreRegisterClick}
            >
              Pre-Register Now
            </button>

            <p className={`${styles.descriptions} !mb-2`}>
            <h3> Finale Venue:</h3>
            City Amphitheatre,
            Qurum.
          </p>
          </div>
        </div>

        {/* Right Block */}
        <div>
          {/* <p className={styles.descriptions}>
            <h3> Audition Venue:</h3>
            Indian School Wadikabir International School.
          </p> */}
          {/* <div className={styles.googleMap}> */}
            {/* <iframe
              title="Audition Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.099507372795!2d58.55760770139149!3d23.576527525572136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f0b61a986865%3A0xb58915959ea9b780!2sInternational%20school%20wadi%20kabeer!5e0!3m2!1sen!2som!4v1719920338286!5m2!1sen!2som"
              width="80%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>

           
           {/* <p className={styles.descriptionse}>
            Oman Convention and Exhibition Center.
          </p>  */}
        
      </div>
    </div>
      <div>
        <div className={`${styles.below} mx-20`}>
          <h3 className={styles.below1}>
            "On many occasions when I am dancing I've felt touched by something
            sacred.
          </h3>
          <h3 className={styles.below2}>
            In those moments, I felt my spirit soar and become one with
            everything that exists"
          </h3>
          <h3 className={styles.below3}>-Michael Jackson</h3>
        </div>
      </div>

    </>
  );
};

export default Content;
