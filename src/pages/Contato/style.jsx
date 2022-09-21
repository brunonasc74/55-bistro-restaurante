import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 4rem;
height: 100%;

.p-contato {
  margin-top: 2rem;
  width: 65%;
  text-align: center;
}

@media (max-width: ${({ theme }) => theme.screen.sm}) {

.p-contato {
    margin-top: 1rem;
    font-size: 16px;
    text-align: justify;
}

}
`

export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;

h1 {
  font-size: 35px;
  color: #ff3a39;
}

  @media (max-width: ${({ theme }) => theme.screen.sm}) {

    h1 {
        font-size: 24px;
    }
    
}

@media (max-width: ${({ theme }) => theme.screen.sm}) {
  h1 {
    font-size: 20px;
  }
}
`

export const Animation = styled.div`

 /* position: relative; */
 width: 2.5em;
 height: 2.5em;
 transform: rotate(165deg);

 &:before, &:after {
 content: "";
 position: absolute;
 top: 50%;
 left: 50%;
 display: block;
 width: 0.5em;
 height: 0.5em;
 border-radius: 0.25em;
 transform: translate(-50%, -50%);
}

&:before {
 animation: before8 2s infinite;
}

&:after {
 animation: after6 2s infinite;
}

@keyframes before8 {
 0% {
  width: 0.5em;
  box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
 }

 35% {
  width: 2.5em;
  box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
 }

 70% {
  width: 0.5em;
  box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
 }

 100% {
  box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
 }
}

@keyframes after6 {
 0% {
  height: 0.5em;
  box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
 }

 35% {
  height: 2.5em;
  box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
 }

 70% {
  height: 0.5em;
  box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
 }

 100% {
  box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
 }
}

@media (max-width: ${({ theme }) => theme.screen.sm}) {
  width: 1em;
 height: 1em;
 transform: rotate(165deg);

}
`