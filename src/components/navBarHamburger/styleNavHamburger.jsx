import styled from "styled-components";

export const Container = styled.div`


background-color: #0d0d14e6;
display: flex;
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
margin-top: 104px;
align-items: center;




@media (max-width: ${({ theme }) => theme.screen.sm}){
  /* display: none; */
  
  .list{
    width: 100%;
  }

  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 2rem;
  }

  
}
`