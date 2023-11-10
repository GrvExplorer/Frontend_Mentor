import styles from "./Themebtn.module.css";
import styled from "styled-components";

const ThemeBtn = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "18px" }}
    >
      <p>THEME</p>
      <div>
        <ul className={styles.themesNumber}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ThemeChange>
          <Eclips></Eclips>
        </ThemeChange>
      </div>
    </div>
  );
};

export default ThemeBtn;

const ThemeChange = styled.div`
  display: grid;
  place-content: end;
  margin-top: 8px;
  width: 85px;
  height: 32px;
  background-color: #1e0837;
  border-radius: 16px;
  box-shadow: 0px 4px 4px #fddf41;
  padding: 6px;
`;

const Eclips = styled.div`
  width: 16.815px;
  height: 19.738px;
  border-radius: 19.738px;
  background: #05e3d8;
`;
