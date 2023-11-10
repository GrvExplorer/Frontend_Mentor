import styled from "styled-components";
import { ButtonE } from "./CalculationBtn.stylesd";

const CalculationBtn = () => {
  const btnText = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
  ];
  return (
    <Number>
      <Div>
        {btnText.map((value, i) => (
          <Button key={i} Del={value === "DEL"}>
            {value}
          </Button>
        ))}
      </Div>
      <div style={{ display: "flex", gap: "37px", marginTop: 32 }}>
        <Button
          onClick={() => setInputNumber("")}
          Del={true}
          style={{ width: "227px", color: "white" }}
        >
          RESET
        </Button>
        <ButtonE>=</ButtonE>
      </div>
    </Number>
  );
};

export default CalculationBtn;

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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 63px;
  border-radius: 8px;
  background: ${({ Del }) => (Del ? "#56077A" : "#331b4d")};
  box-shadow: 0px 5px 4px 0px #891ea0;
  color: #fddf41;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: ${({ Del }) => (Del ? "#8631B0" : "#6B34AC")};
  }
`;
