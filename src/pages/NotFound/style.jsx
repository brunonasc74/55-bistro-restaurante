import styled from "styled-components";

export const Section = styled.section`
  margin: 0;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 2rem;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 25%;
  }

  .box div {
    width: 250px;
    height: 100px;
    line-height: 80px;
    color: #ff3a39;
    background-color: #fff;
    font-size: 250%;
    text-align: center;
    text-transform: capitalize;
    animation: moving 8s linear infinite;
    -webkit-animation: moving 8s linear infinite;
    -moz-animation: moving 8s linear infinite;
    -o-animation: moving 8s linear infinite;

    transform-origin: 50% -400%;
    -webkittransform-origin: 50% -400%;
    -moz-transform-origin: 50% -400%;
    -o-transform-origin: 50% -400%;
  }

  .box div:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: block;
  }

  .box div:after {
    content: "";
    width: 3px;
    height: 335px;
    background-color: #fff;
    display: block;
    position: absolute;
    left: 50%;
    top: -330px;
  }

  .box p {
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    width: 300px;
  }

  .box p span {
    display: block;
    font-size: 300%;
  }

  button {
    background-color: #ff3a39;
    border: 1px solid  #ff3a39;
    padding: 12px 20px;
    margin-top: 1rem;
    border-radius: 7px;
    transition: 0.3s;
    color: #fff;
  }

  button:hover {
    border: 1px solid #ff3a39;
    background-color: transparent;
    color: #ff3a39;
    cursor: pointer;
  }

  @keyframes moving {
    0%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
  }

  @-webkit-keyframes moving {
    0%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
  }

  @-moz-keyframes moving {
    0%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
  }

  @-o-keyframes moving {
    0%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
  }
`;
