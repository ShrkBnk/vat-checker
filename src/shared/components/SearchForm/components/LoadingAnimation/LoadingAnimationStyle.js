import styled, {keyframes} from "styled-components";

export const LoadingContainer = styled.div`
    position:relative;
    max-width: 400px;
    text-align: center;
    margin: 10px auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;
