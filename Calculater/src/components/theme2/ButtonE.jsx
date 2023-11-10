import styled from "styled-components";


const ButtonE = ({ digit }) => {
  return <Button1 Del={digit === 'RESET'}>{digit}</Button1>;
};

export default ButtonE;

const Button1 = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ Del }) => (Del ? "white" : '')};
  align-items: center;
  width: 227px;
  height: 65px;
  border-radius: 10px;
  background: ${({ Del }) => (Del ? "#56077A" : "#00decf")};
  box-shadow: 0px 4px 2px 0px ${({ Del }) => (Del ? "#891ea0" : '#5efff5')};;
  font-size: 28px;
  font-weight: 700;
  &:hover {
    background-color: ${({ Del }) => (Del ? "#8631B0" : "#94fff9")};
  }
`;
