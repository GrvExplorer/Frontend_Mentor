import styled from "styled-components";

export const NextStp = ({ setSteps, steps, shows, dispatch }) => {
  return (
    <div style={{ textAlign: "end", width: "100%" }}>
      <NextBtn
        onClick={(e) => {
          e.preventDefault();
          const emtyIndex = shows.indexOf("");
          const includesAt = shows[1].includes('@');
          const lengthOf = shows[2].length;
          if (emtyIndex === -1 ) {
            if (!includesAt) {
              dispatch({type: 'setEmtyField', value: '@'})
            }
            else if (lengthOf !== 10) {
              dispatch({type: 'setEmtyField', value: 10})
            }
            else {
              setSteps(steps + 1);
              dispatch({type: 'setEmtyField', value: ''})
            }
          } else {
            dispatch({type: 'setEmtyField', value: emtyIndex})
          }
        }}
        type="submit"
      >
        Next Step
      </NextBtn>
    </div>
  );
};

export const BackStp = ({ steps, setSteps }) => {
  return (
    <BackBtn
      onClick={(e) => {
        e.preventDefault();
        setSteps(steps - 1);
      }}
      type="button"
    >
      Go Back
    </BackBtn>
  );
};

export const Confirm = ({ steps, setSteps }) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setSteps(steps + 1);
      }}
      style={{ textAlign: "end", width: "100%" }}
    >
      <ConfirmBtn type="submit">Confirm</ConfirmBtn>
    </div>
  );
};

const NextBtn = styled.button`
  background-color: hsl(213, 96%, 18%);
  font-size: 16px;
  font-weight: 600;
  width: 120px;
  height: 48px;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: hsl(243, 100%, 62%);
  }
`;
const ConfirmBtn = styled.button`
  background-color: hsl(243, 100%, 62%);
  font-size: 16px;
  width: 120px;
  height: 48px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: hsl(228, 100%, 84%);
  }
`;
const BackBtn = styled.button`
  border: none;
  background-color: white;
  display: flex;
  justify-content: start;
  padding-bottom: 15px;
  color: hsl(231, 11%, 63%);
  width: 150px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  :hover {
    color: hsl(213, 96%, 18%);
  }
`;
