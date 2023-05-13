import css from '../styles/Footer.module.css';
import {UilFacebook, UilTwitter, UilGithub} from "@iconscout/react-unicons";

export default function Footer() {
    return (
        <div className={css.container}>
            <span>All Rights Reserved</span>
            <div className={css.socials}>
                <UilFacebook size="40"/>
                <UilTwitter size="40"/>
                <UilGithub size="40"/>
            </div>
        </div>
    );
};


