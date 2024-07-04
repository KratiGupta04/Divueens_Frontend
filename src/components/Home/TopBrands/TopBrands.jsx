import React from "react";
import styles from "./TopBrands.module.css";
import { brands } from "../../../assets/assets";
import BestSeller from "../BestSeller/BestSeller";

const TopBrands = () => {
  return (
    <>
      <div className={styles["brand-section"]}>
        <div className="heading">
          <hr className="hr-left" />
          <h2>Top Brands</h2>
          <hr className="hr-right" />
        </div>
        <div className={styles["brand-background"]}>
          <div className={styles["bar"]}>
            {brands.map((item, index) => (
              <div key={index} className={styles["card"]}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles["heading-2"]}>
          <div className={`${styles["spot"]} ${styles["spot1"]}`}></div>
          <div className={`${styles["spot"]} ${styles["spot2"]}`}></div>
          <div className={`${styles["spot"]} ${styles["spot3"]}`}></div>
          <h1>Get Div coins on every order</h1>
        </div>
      </div>
    </>
  );
};

export default TopBrands;