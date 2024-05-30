import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/grad.png")} alt="cursor"  className={styles.icons}/>
                <div className={styles.aboutItemText}>
                    <h3>Scholarly aspirant</h3>
                    <p>Currently pursuing my 4th year of M.Sc in Theoretical Computer Science at PSG College of Technology, Coimbatore.</p>
                </div>
            </li>

                    

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/server.png")} alt="cursor" className={styles.icons}/>
                        <div className={styles.aboutItemText}>
                            <h3>Back-end Novice</h3>
                            <p>Presently immersed in backend development, honing skills with Express.js, PostgreSQL, and MySQL for robust server-side solutions.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/ml.png")} alt="cursor" className={styles.icons}/>
                        <div className={styles.aboutItemText}>
                            <h3>ML Enthusiast</h3>
                            <p>Diving deep into the world of machine learning, crafting algorithms that unravel patterns and insights from data.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/feather.png")} alt="cursor" className={styles.icons}/>
                        <div className={styles.aboutItemText}>
                            <h3>Budding Tamil poet</h3>
                            <p>Exploring the nuances of Tamil verse with passion and grace, my Instagram account named <a href="https://www.instagram.com/aayudha_ezhuthu?igsh=dW9tZXdyMDNocXlp" className={styles.insta}>aayudha ezhuthu</a> showcases my blossoming poetic journey.</p>
                        </div>
                    </li>

        </ul>
      </div>
    </section>
  );
};