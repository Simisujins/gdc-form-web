import styles from "./Intro.module.css";

import React from "react";

const Intro = () => {

    


    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <source 
                srcSet=""
                media="(min-width: 1024px)"/>
            <img 
                src="/images/"
                alt=""
                aria-hidden="true" />
            </picture>
           
        </div>
    )
}

export default Intro