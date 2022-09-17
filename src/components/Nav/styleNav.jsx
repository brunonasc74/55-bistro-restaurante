import styled from "styled-components";



export const Container = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
background-color: #0d0d14;
height: 6.5rem;

a {
  text-decoration: none;
}

.logo{
  font-size: 1.6rem;
  color: #ff3a39;
}

span{
  color: white;
}

ul {
  font-size: 1.4rem;
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  a{
    color: white;
    
  }
}

ul a:hover {
  color: #ff3a39;
  transition: 0.3s;
}

.inc{
  display: flex;
  font-size: 1.6rem;
}

`