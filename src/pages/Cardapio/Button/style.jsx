import styled from "styled-components";

const Button = styled.div`
    color: white;
    background-color: #ff3a39;
    width: 150px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    justify-content: center;

    &:hover {
        background-color: #080B10;
        border: 1px solid #ff3a39;
        color: #ff3a39;
        transition: 0.5s;
    }
`

export default Button