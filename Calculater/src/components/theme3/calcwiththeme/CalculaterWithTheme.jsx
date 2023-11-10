import { useReducer, useState } from "react";
import CalculationBtn from "../calculabtn/CalculationBtn";
import ShowNumber from "../ShowNumbers/ShowNumber";
import ThemeBtn from "../Themebtn/ThemeBtn";
import styles from "./CalculaterWithTheme.module.css";


const CalculaterWithTheme = () => {
  return (
    <div>
      <div className={styles.flex}>
        <p className={styles.heading}>Calc</p>
        <ThemeBtn />
      </div>
      <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
        <ShowNumber />
        <CalculationBtn />
      </div>
    </div>
  );
};

export default CalculaterWithTheme;
