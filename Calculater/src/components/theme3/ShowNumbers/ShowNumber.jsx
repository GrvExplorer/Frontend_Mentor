import styled from "styled-components";
import styles from './ShowNumbers.module.css'

function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}


const ShowNumber = () => {
  return <Div> 
  </Div>;
};

export default ShowNumber;

const Div = styled.div`
   /* text-indent: 90%; */
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 31px 23px 31px 0px;
    margin-top: 46px;
    width: 542px;
    height: 125px;
    border-radius: 10px;
    background: #1e0836;
    box-shadow: 0px 8px 4px 0px #891ea0;
    color: #fddf41;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
