import styles from "./Findout.module.css"
import { useNavigate } from "react-router-dom";

const Findout = () => {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        // Navigate to the event page ("/event")
        navigate('/event');
    };



    return (
        <section className={styles.container}>
        <div className={styles.findout}>
            <h3 className={styles.title}>The Gulf Dance Championship, a first-of-its kind event,is set to ignite the region's dance scene.</h3> 
              <h3 className={styles.titles}>  This inclusive competiton welcomes participants of all nationalities and backgrounds, </h3>
              <h3 className={styles.titless}> showcasing a vibrant tapestry of movement.</h3>
            <button className={styles.btn} onClick={handleRegisterClick}>Pre-Register Now</button>
        </div> 
        </section>  
    )
}

export default Findout