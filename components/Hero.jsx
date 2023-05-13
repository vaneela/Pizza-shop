import css from '../styles/Hero.module.css';
import Image from "next/image";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import {UilPhone} from "@iconscout/react-unicons";
import pizza1 from "../assets/p1.jpg";

export default function Hero() {
    return (
        <div className={css.container}>
            {/* LEFT SIDE */}

            <div className={css.leftSide}>
                <div className={css.cherryDiv}>
                    <span>More than faster</span>
                    <Image src={Cherry} alt="" width={40} height={25} />
                </div>

                <div className={css.heroText}>
                    <span>Be the Fastest</span>
                    <span>In Delivering</span>
                    <span>
                    Your <span style={{color : "var(--themeRed)"}}>Pizza</span>
                    </span>
                </div>
                
                <span className={css.miniText}>Our Mission is to provide our customers with quality experience at the cheapest price!</span>

                <button className={`btn ${css.btn}`}>Get Started</button>

            </div>
           

            {/* RIGHT SIDE */}
            <div className={css.rightSide}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic" />
                </div>

                <div className={css.contactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color="white" />
                    </div>
                </div>

                <div className={css.pizza}>
                    <div>
                        <Image src={pizza1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span>
                            <span style={{color : "var(--themeRed)"}}>₹</span>
                            9.99
                         </span>
                    </div>
                </div>
            </div>


        </div>
    );
};
