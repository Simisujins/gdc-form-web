import styles from "./Event.module.css";
import Footer from "../Footer";

import Intro from "../Intro";
import { useNavigate } from "react-router-dom";

//image import
import eventImage from "../../src/images/eventimage2.jpeg";
import Img1 from "../../src/images/eventcontent.avif";

const EventCon = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the event page ("/event")
    navigate("/event");
  };

  return (
    <div className={styles.intro_content}>
      <Intro></Intro>

      <h3 className={styles.titles}></h3>

      <div className={styles.box}>
        <img src={Img1}></img>

        <div className={styles.description}>
          <p className={styles.description_text}>
            <span className={styles.who_are_we}>GUlf Dance Championship</span>
            Celebrating the artistry and passion of dance, this competition marks a significant milestone, bringing together talents of all ages from all over the Gulf region and beyond. With thrilling performances and fierce competition, the Gulf Dance Championship promises to be a spectacle of creativity and skill, showcasing the
Dance styles in Hip hop and Bollyhop 
(Must consist of minimum 3 sub styles of hip hop ).
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <p className={`${styles.descriptions} ${styles.catCard}`}>
          
          <h3> Categories:</h3>
          <p>Mini Marvel(5-8 years old)</p>
          <p>Sub Junior (8-12 years old)</p>
          <p> Junior (12-17 years old)</p>
          <p> Crew (8years & above)</p>
         
        </p>

        <p className={`${styles.descriptions1} ${styles.catCard}`}>
          <h3>Sub-Categories: </h3>
          <p>Trio ( 3 participants)</p>
          <p>Mini (8 participants)</p>
          <p> Mega( 8-20 participants) </p>

          <p>(Each performance shall only be 2 mins long)</p>
        </p>

        <p className={`${styles.descriptions2} ${styles.catCard}`}>
          <h3> Dates and Venue details: </h3>
          <p>Audition Dates and Finale Dates</p>
        
          <p>will be reveal Soon </p>
          <p>
            Finale Venue: City Amphitheatre,Qurum
          </p>
        </p>
      </div>

      <div className={styles.imagesection}>
        <section className={styles.findout}>
          <div className={styles.findout_detail}>
            <h3>
              Join us as we witness the fusion of talent and passion on this
              prestigious stage.
            </h3>
            <h3>
              {" "}
              Let the rhythm of the Gulf Dance Championship inspire and ignite
              your senses as we embark on an unforgettable,
            </h3>
            <h3> journey through the art of dance.</h3>
            <button className={styles.btn} onClick={handleRegisterClick}>
              Pre-Register Now
            </button>
          </div>
        </section>

        <div className={styles.image}>
          <img src={eventImage} alt="Event Image" />
        </div>
      </div>

       <Footer></Footer>
    </div>
  );
};

export default EventCon;
