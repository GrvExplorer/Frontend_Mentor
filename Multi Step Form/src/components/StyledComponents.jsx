import styled from "styled-components";

const Plans = styled.section`
  display: flex;
  gap: 20px;
`;

const Switch = styled.section`
  position: relative;
  width: 46px;
  height: 22px;
  .slider {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 34px;
    background-color: hsl(213, 96%, 18%);
    cursor: pointer;
    transition: 0.4s;
  }

  .slider:before {
    margin-left: 4px;
    margin-right: 4px;
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Box = styled.div`
  :hover {
    border: 1px solid blue;
  }
  border-radius: 10px;
  border: 1px solid
    ${({ isPlanSelected }) => (isPlanSelected ? "blue" : "lightgray")};
  width: 150px;
  padding: 18px 0px 0px 16px;
  img {
    width: 54px;
    height: 54px;
  }
  div {
    padding: 20px 0px;

    .offer {
      color: hsl(213.0841121495327, 69.03225806451613%, 30.392156862745097%);
      font-size: 14px;
      font-weight: 600;
    }

    p {
      padding: 0px;
    }
    h4 {
      font-size: 18px;
      font-weight: 700;
      color: hsl(213.25301204819277, 69.74789915966385%, 23.333333333333332%);
    }
  }
`;

const Form = styled.div`
  position: relative;
  p {
    color: hsl(231, 11%, 63%);
    font-weight: 600;
    padding: 12px 0px 24px 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 18px;
    label {
      margin-top: 8px;
      font-weight: 600;
      font-size: 17px;
      color: hsl(230.76923076923072, 5.26315789473684%, 51.56862745098039%);
    }

    input {
      height: 44px;
      font-size: 14px;
      padding-left: 12px;
      border-radius: 5px;
      font-weight: 500;
      cursor: pointer;
      border: 2px solid hsl(229, 24%, 87%);
      :hover {
        border: 2px solid hsl(243, 100%, 62%);
      }
      :focus {
        outline: 0px;
        border: 2px solid hsl(243, 100%, 62%);
      }
    }
  }

  .service {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .set {
    display: flex;
    width: 130%;
    height: 25%;
    section {
      height: 100%;
    }
  }

  .total {
    padding: 12px 0px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    p {
      padding: 0px;
    }
    div {
      display: flex;
      flex-direction: row;
      gap: 0px;
      margin-top: 0px;
      justify-content: space-between;
      .totalamount {
        font-weight: 700;
        font-size: 21px;
        color: hsl(243, 100%, 62%);
      }
    }
  }

  .margin {
    margin-top: 8px;
    background-color: hsl(217, 100%, 97%);
    padding: 12px;
    border-radius: 10px;
    hr {
    }
    .addons {
      div {
        display: flex;
        flex-direction: row;
        gap: 0px;
        margin-top: 0px;
        justify-content: space-between;
        p {
          padding: 10px 0px;
        }
        span {
          color: hsl(212.6315789473684, 60%, 37.254901960784316%);
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }

  .plan {
    display: flex;
    flex-direction: row;
    gap: 0px;
    margin-top: 0px;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 3px solid
      hsl(232.4999999999998, 24.99999999999998%, 93.72549019607843%);
    h2 {
      font-weight: 600;
      font-size: 18px;
      color: hsl(213, 96%, 18%);
    }

    span {
      font-weight: 700;
      font-size: 19px;
    }
    .change {
      width: fit-content;
      cursor: pointer;
      padding: 0px 0px 0px 0px;
      border-bottom: 1px solid transparent;
      :hover {
        border-bottom: 1px solid hsl(243, 100%, 62%);
        color: hsl(243, 100%, 62%);
        /* padding-bottom: -10px; */
        /* text-underline-offset: 2px; */
      }
    }
  }

  .MOY {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 14px;

    margin-top: 36px;
    label {
      margin-top: 0px;
      font-size: 16px;
    }

    #toggle[type="checkbox"]:checked + .yo {
      /* color: hsl(228, 100%, 84%); */
      color: red;
    }
  }
`;

const Position = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 30%;
  width: 100%;
  padding: 20px;
`;

const Thanks = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
  gap: 20px;
  height: 100%;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    color: hsl(231, 11%, 63%);
    font-weight: 600;
  }
`;

const CheckBox = styled.section`
  border: 1px solid ${({ chek }) => (chek ? "blue" : "lightgray")};
  border-radius: 10px;
  padding-bottom: 10px;
  :hover {
    border: 1px solid blue;
  }
  label {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    input {
      width: 24px;
      height: 24px;
    }
    h2 {
      color: black;
      font-size: 20px;
      font-weight: 600;
    }
    p {
      padding: 0px;
      font-size: 14px;
    }
    div {
      width: 60%;
      margin-top: 0px;
    }
    span {
      color: hsl(243, 100%, 62%);
    }
  }
`;

const Div = styled.div`
  display: flex;
`;

const Warning = styled.nav`
  color: red;
  display: ${({displayNone}) => (displayNone ? "flex" : "none")};
  padding: 2px;
  font-weight: 600;
  align-items: end;
  font-weight: 600;
`;
const Flex = styled.header`
  display: flex;
  justify-content: space-between;
`;

export {
  Div,
  Form,
  Plans,
  Box,
  Switch,
  Flex,
  Position,
  CheckBox,
  Thanks,
  Warning,
};
