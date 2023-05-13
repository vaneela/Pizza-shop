import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import Image from "next/image";

export default function Services() {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>What We Serve</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>    

      {/* Features */}
      <div className={css.services}>
        <div className={css.feature}>
            <div className={css.imageWrapper}>
                <Image src={s1} alt="" objectFit="cover" layout="intrinsic"></Image>
            </div>
            <span>Easy to Order</span>
            <span>You only need a few steps in food ordering</span>
        </div>
        <div className={css.feature}>
            <div className={css.imageWrapper}>
                <Image src={s2} alt="" objectFit="cover" layout="intrinsic"></Image>
            </div>
            <span>Fastest Delivery</span>
            <span>You will receive your pizza in less than 10 minutes!</span>
        </div>
        <div className={css.feature}>
            <div className={css.imageWrapper}>
                <Image src={s3} alt="" objectFit="cover" layout="intrinsic"></Image>
            </div>
            <span>Best Quality</span>
            <span>The #1 Pizza Store in India!</span>
        </div>
      </div>
    </div>
  );
}
