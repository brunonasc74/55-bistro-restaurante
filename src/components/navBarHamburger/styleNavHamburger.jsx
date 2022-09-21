import styled from "styled-components";

export const Container = styled.div`


background: rgb(13,13,20);
background: linear-gradient(180deg, rgba(13,13,20,1) 0%, rgba(13,13,20,0.8155637254901961) 68%, rgba(255,58,57,0.14049369747899154) 100%);
display: flex;
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
margin-top: 104px;
align-items: center;
z-index: 33;




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