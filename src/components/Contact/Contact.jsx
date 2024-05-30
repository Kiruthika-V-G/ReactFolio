import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to drop me a line!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                    <a href="mailto:vgkiruthika2004@gmail.com">vgkiruthika2004@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
                    <a href="https://github.com/Kiruthika-V-G">github.com/Kiruthika-V-G</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="email" />
                    <a href="https://www.linkedin.com/in/kiruthika-v-g-5b7303220/">linkedin.com/kiruthika-v-g</a>
                </li>
            </ul>
        </footer>
    );
};