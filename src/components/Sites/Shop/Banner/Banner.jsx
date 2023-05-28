import React from "react";
import s from "./Banner.module.css";
import bn1 from "../../../../img/banner1.png";
import bn2 from "../../../../img/banner2.png";
const Banner = () => {
  return (
    <div className={s.banner}>
      <div className={s.banner_info}>
      <div className={s.banner_text}>
        New generation shop experiences for you
      </div>
      <div className={s.banner_subtiitle}>Bringing fashion back to its original and classic form</div>
      </div>
      <div className={s.bn_images}>
        <div>
          <img className={s.bn_img1} src={bn1} alt="bn1" />
        </div>
        <div>
          <img className={s.bn_img2} src={bn2} alt="bn2" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
