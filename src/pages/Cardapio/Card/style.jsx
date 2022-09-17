import styled from "styled-components";

export const StyledCard = styled.div`

padding: 0.5rem;

    .card {
        display: flex;
        flex-direction: column;
        background-color: white;
        color: #111419;
        width: 350px;
        height: fit-content;
        box-sizing: border-box;
        border-radius: 15px;

    }

    .card-image {
        width: 100%;
        border-radius: 15px;
    }

    .card-image img {
        width: 100%;
        height: 300px;
        border-radius: 20px 20px 0 0;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.4rem;
    }
    
    .card-desc {
        font-size: 16px;
    }

    .card-np {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }
`