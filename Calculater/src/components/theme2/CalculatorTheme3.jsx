import styled from "styled-components";
import styles from "./CalculatorTheme3.module.css";
import Button from "./Button";
import DigitBtn from "./DigitBtn";
import OperaterBtn from "./OperaterBtn";
import ButtonE from "./ButtonE";
import ThemeBtn from "./ThemeBtn";

const CalculatorTheme3 = () => {
  return (
    <Body>
      <div>
        <div className={styles.flex}>
          <p className={styles.heading}>Calc</p>
          <ThemeBtn />
        </div>

        <Show className={styles.output}>
          <div className="previous_operand">897898+</div>
          <div className="current_operand">8342476798987867687687776768768767868</div>
        </Show>
      </div>

      <Number>
        <Div>
          <DigitBtn digit={7} />
          <DigitBtn digit={8} />
          <DigitBtn digit={9} />

          <Button digit={"DEL"} />

          <DigitBtn digit={4} />
          <DigitBtn digit={5} />
          <DigitBtn digit={6} />

          <OperaterBtn operater={"+"} />

          <DigitBtn digit={1} />
          <DigitBtn digit={2} />
          <DigitBtn digit={3} />

          <OperaterBtn operater={"-"} />

          <DigitBtn digit={"."} />
          <DigitBtn digit={0} />

          <OperaterBtn operater={"/"} />
          <OperaterBtn operater={"x"} />
        </Div>
        <div style={{ display: "flex", gap: "37px", marginTop: 32 }}>
          <ButtonE digit={"RESET"} />
          <ButtonE digit={"="}></ButtonE>
        </div>
      </Number>
    </Body>
  );
};

export default CalculatorTheme3;

const Body = styled.div`
  height: 100vh;
  display: grid;
  gap: 30px;
  place-content: center;
  background-color: #17062a;
`;

const Number = styled.div`
  border-radius: 10px;
  background: #1e0836;
  width: 538px;
  height: 474px;
  box-shadow: 0px 8px 2px 0px #fddf41;
  padding: 25px 28px;
`;

const Div = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 63px);
  grid-template-columns: repeat(4, 105px);
  gap: 20px;
`;

const Show = styled.div`
  /* text-indent: 90%; */
  display: grid;
  justify-content: end;
  padding: 31px 23px 31px 19px;
  margin-top: 46px;
  width: 542px;
  overflow: hidden;
  height: 135px;
  border-radius: 10px;
  background: #1e0836;
  box-shadow: 0px 8px 4px 0px #891ea0;



  .current_operand {
    color: #fddf41;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .previous_operand {
    display: flex;
    justify-content: end;
    padding-left: 28px;
    color: rgba(253, 223, 65, 0.5);
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
