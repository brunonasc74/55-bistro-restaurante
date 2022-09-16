import styled from "styled-components";

export const StyledSelector = styled.div`
    padding-bottom: 70px;
    width: 100%;
    display: flex;
    justify-content: center;


    .selector {
        justify-content: center;
        margin: 20px 0;
        width: 100%;
        padding: 0 1.5rem;
        flex-wrap: nowrap;
        text-align: center;
        background-color: #FF3A39;

    }

    .selector-item {
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 17px;
        cursor: pointer;
        margin: 8px 15px;
        width: 100%;
        padding: 20px 0;
        transition: all 0.3s ease-in-out;
        background-color: var(--bg-color-1);
        border-radius: 5px;
        border: 1px solid var(--primary-color);
        position: relative;
    }

    span {
        color: white;
    }
    
`