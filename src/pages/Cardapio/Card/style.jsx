import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 0.5rem;
  margin-bottom: 50px;
  margin-top: 40px;

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: #111419;
    width: 350px;
    height: fit-content;
    box-sizing: border-box;
    border-radius: 18px 18px 10px 10px;
  }

  .card-image {
    width: 100%;
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

  .card-f-desc {
    min-height: 200px;
  }

  .card-desc {
    font-size: 16px;
    padding: 0.2rem;
  }

  .card-np {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }

  .card-name {
    margin: 0;
    height: 25px;
    font-size: 18px;
  }

  .card-price {
    margin: 0;
    height: 25px;
    color: #ff3a39;
  }
`;
