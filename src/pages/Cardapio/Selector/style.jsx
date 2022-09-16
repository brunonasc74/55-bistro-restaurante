import styled from "styled-components";

export const StyledSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;

  .selector {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex-wrap: nowrap;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ff3a39;
    background-color: #080B10;
  }

  .selector-item {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 17px;
    cursor: pointer;
    width: 100%;
    padding: 20px 0;
  }

  .selector-item:hover, .selector-item:active {
    background-color: #ff3a39;    
  }

  .selector-item:hover i, .selector:active i {
    color: white;
  }

  .selector-item:hover span, .selector:active span {
    color: white;
  }

  i {
    font-size: 2rem;
    color: #ff3a39;
  }



`;
