import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`
export const Card = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
padding: 2rem;
margin-top: 1rem;

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #FF3A39;
}

@media (max-width: ${({ theme }) => theme.screen.sm}) {
  display: flex;
  flex-direction: column;
}

`

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

span {
  display: block;
  font-size: 14px;
}
`
export const BoxIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FF3A39;
border-radius: 3px;
width: 280px;
height: 45px;
margin-top: 1rem;

 .icon{
  margin: 5px;
  color: #fff;
  cursor: pointer;
  width: 40px;
  height: 25px;
  transition: all 1s ease-out;
 }

 .icon:hover{
  margin: 5px;
  color: #111419;
  cursor: pointer;
 }
 `

export const BoxText = styled.div`
background-color: #0d0d14;
padding: 4rem;
margin: auto;
border-radius: 4px;

h4 {
  font-size: 22px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 1.1rem;
  color: #fff;
}


@media (max-width: ${({ theme }) => theme.screen.sm}) {
  min-width: 500px;
  height: 250px;
  padding: 2rem;
}

h4 {
  font-size: 16px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 12px;
  color: #fff;
}

@media (max-width: ${({ theme }) => theme.screen.xs}) {
  padding: 2rem;
  min-width: 380px;
  height: 250px;
  padding: 2rem;
}

h4 {
  font-size: 16px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 12px;
  color: #fff;
}

@media(max-width: 400px) {
  padding: 1rem;
  min-width: 280px;
  height: 250px;
  padding: 2rem;

  h4 {
  font-size: 14px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 12px;
  color: #fff;
}
}


`