import styled from "styled-components";


const DigitBtn = ({digit}) => {
    return (
      <Button1>{digit}</Button1>
    )
  }
  
  export default DigitBtn
  
  const Button1 = styled.div`
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