import React, { useState } from "react";
import styled from "styled-components";
import pic from './images/bg-sidebar-desktop.svg'

const Stepsmenu = ({isSelected}) => {

  const noOfRotate = [
    { text: "your info", num: 1 },
    { text: "Select Plan", num: 2 },
    { text: "add-ons", num: 3 },
    { text: "summary", num: 4 },
  ];

  return (
    <Steps pic={pic}>
      <div className="conte">
        {noOfRotate.map((value, i) => (
          <Step key={i} isSelected={isSelected === value.num}>
            <p>{value.num}</p>
            <div>
              <h6>Step {value.num}</h6>
              <h5>{value.text}</h5>
            </div>
          </Step>
        ))}
      </div>
    </Steps>
  );
};

export default Stepsmenu;

const Steps = styled.div`
  padding: 50px 30px;
  height: 100%;
  /* width: 40%; */
  border-radius: 10px;
  background-image: url(${({pic}) => (pic)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .conte {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

const Step = styled.div`
  color: white;
  display: flex;
  gap: 18px;
  p {
    padding: 8px 14px;
    display: grid;
    place-content: center;
    border: 1px solid white;
    border-radius: 100%;
    font-weight: 600;
    font-size: 12px;

    background-color: ${(pros) =>
      pros.isSelected ? "lightblue" : "transparent"};
    color: ${(pros) => (pros.isSelected ? "black" : "white")};
  }
  div {
    h6 {
      color: hsl(231, 11%, 63%);
      font-size: 12px;
    }
    h5 {
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;
