import "./App.css";
import Stepsmenu from "./components/Stepsmenu";
import styled, { ThemeProvider } from "styled-components";
import { Step1, Step2, Step3, Step4, Step5 } from "./components/Steps";
import pic2 from "./components/images/icon-advanced.svg";
import pic1 from "./components/images/icon-arcade.svg";
import pic3 from "./components/images/icon-pro.svg";

import { BackStp, Confirm, NextStp } from "./components/Buttons";
import { useReducer, useState } from "react";


// red border when wrong or null input 

const reducer = (state, action) => {
  switch (action.type) {
    case "Inname":
      return {
        ...state,
        Inname: action.value,
      };
    case "Inemail":
      return {
        ...state,
        Inemail: action.value,
      };
    case "InphoneNum":
      return {
        ...state,
        InphoneNum: action.value,
      };
    case "setIsYearly":
      return {
        ...state,
        isYearly: action.value,
      };
    case "setEmtyField":
      return {
        ...state,
        emtyField: action.value,
      };
    case "setIsPlan":
      return {
        ...state,
        isPlan: action.value,
      };
    default:
      break;
  }
};

const initialvalue = {
  Inname: "",
  Inemail: "",
  InphoneNum: "",
  isYearly: false,
  isPlan: 1,
  emtyField: "",
};

function App() {
  const [steps, setSteps] = useState(1);
  const [isChecked, setIsChecked] = useState([0, 1]);
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const [isYearorMonth, setIsYearorMonth] = useState(false);
  const [isPlanSelected, setIsPlanSelected] = useState(0);

  const arrrayOfPlansYearandMonthe = [
    [
      {
        para: "Access to multiplayer games",
        head: "Online service",
        price: "+$1/mo",
        num: 0,
      },
      {
        para: "Extra 1TB of cloude space",
        head: "Large storage",
        price: "+$2/mo",
        num: 1,
      },
      {
        para: "Custom theme on your profile",
        head: "Customizable profile",
        price: "+$2/mo",
        num: 2,
      },
    ],
    [
      {
        para: "Access to multiplayer games",
        head: "Online service",
        price: "+$10/yr",
        num: 0,
      },
      {
        para: "Extra 1TB of cloude space",
        head: "Large storage",
        price: "+$20/yr",
        num: 1,
      },
      {
        para: "Custom theme on your profile",
        head: "Customizable profile",
        price: "+$20/yr",
        num: 2,
      },
    ],
  ];

  const arrrayOfPlansYearandMonthe2 = [
    [
      { image: pic1, type: "Arcade", price: "$9/mo", num: 0 },
      { image: pic2, type: "Advanced", price: "$12/mo", num: 1 },
      { image: pic3, type: "Pro", price: "$15/mo", num: 2 },
    ],
    [
      { image: pic1, type: "Arcade", price: "$90/yr", num: 0 },
      { image: pic2, type: "Advanced", price: "$120/yr", num: 1 },
      { image: pic3, type: "Pro", price: "$150/yr", num: 2 },
    ],
  ];

  let holdStepCom = [];
  let backStepOn;
  let confirmStepOn;
  let nextStepOn;

  const theme = {};

  switch (steps) {
    case 1:
      holdStepCom.push(
        <Step1
        emtyField={state.emtyField}
          key={1}
          setSteps={setSteps}
          steps={steps}
          dispatch={dispatch}
          Inname={state.Inname}
          Inemail={state.Inemail}
          InphoneNum={state.InphoneNum}
        />
      );
      break;
    case 2:
      holdStepCom = [];
      holdStepCom.push(
        <Step2
          key={2}
          arrrayOfPlansYearandMonthe2={arrrayOfPlansYearandMonthe2}
          isPlanSelected={isPlanSelected}
          setIsPlanSelected={setIsPlanSelected}
          isYearorMonth={isYearorMonth}
          setIsYearorMonth={setIsYearorMonth}
          dispatch={dispatch}
        />
      );
      break;
    case 3:
      holdStepCom = [];
      holdStepCom.push(
        <Step3
          key={3}
          arrrayOfPlansYearandMonthe={arrrayOfPlansYearandMonthe}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isYearly={state.isYearly}
        />
      );
      break;
    case 4:
      holdStepCom = [];
      holdStepCom.push(
        <Step4
          key={4}
          addons={arrrayOfPlansYearandMonthe}
          isPlanSelected={isPlanSelected}
          plans={arrrayOfPlansYearandMonthe2}
          isChecked={isChecked.sort()}
          isYearorMonth={isYearorMonth}
          setSteps={setSteps}
        />
      );
      break;
    case 5:
      holdStepCom = [];
      holdStepCom.push(<Step5 key={5} />);
      break;

    default:
      break;
  }

  if (steps > 1 && steps < 5) {
    backStepOn = true;
  } else {
    backStepOn = false;
  }
  if (steps === 4) {
    confirmStepOn = true;
  } else {
    confirmStepOn = false;
  }
  if (steps >= 4) {
    nextStepOn = false;
  } else {
    nextStepOn = true;
  }

  return (
    <>
      <ThemeProvider theme={theme} />
      <Body>
        <Form>
          <Box>
            <Stepsmenu isSelected={steps} />
          </Box>
          <DetailsStd>
            {holdStepCom}
            <PositionBtn>
              {backStepOn ? <BackStp steps={steps} setSteps={setSteps} /> : ""}
              {nextStepOn ? (
                <NextStp
                  shows={[state.Inname, state.Inemail, state.InphoneNum]}
                  steps={steps}
                  dispatch={dispatch}
                  setSteps={setSteps}
                />
              ) : (
                ""
              )}
              {confirmStepOn ? (
                <Confirm steps={steps} setSteps={setSteps} />
              ) : (
                ""
              )}
            </PositionBtn>
          </DetailsStd>
        </Form>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(206, 94%, 87%);
`;

const Box = styled.div`
  width: 30%;
`;

const Form = styled.form`
  display: flex;
  gap: 100px;
  height: 80%;
  width: 62%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  padding: 16px;
`;

const DetailsStd = styled.div`
  width: 482px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PositionBtn = styled.div`
  display: flex;
  align-items: end;
`;
