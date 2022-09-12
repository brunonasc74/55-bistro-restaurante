import styled from "styled-components";

export const Card = styled.section`
padding: 4rem;
`

export const ProfileBox = styled.div`
width: 350px;
height: 350px;
border-radius: 4px;
margin-bottom: 2rem;
box-shadow: 0 10px 10px 10px rgba(50,50, 50, 0.1);
padding: 1.5rem;
position: relative;
background-color: #070707;
transition: background 0.9s;

 h4 {
  margin-top: 1.8rem;
  margin-bottom: 1rem;
  color: #FF3A39;
 }

 span {
  color: #555;
  font-size: 14px;
}

 img {
   width: 100px;
   height: 150px;
   border-radius: 4px;
   position: absolute;
   top: 20px;
   right: 5px;
   transition: .5s;
 }

 p{
  font-size: 12px;
  line-height: 18px;
  color: #555;
 }

 &:hover {
  background-color: #fff;
  cursor: pointer;
 }
` 

export const BoxIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FF3A39;
margin: 4rem auto 1.5rem;
text-align: center;
border-radius: 3px;

 .icon{
  margin: 5px;
  color:#fff;
  cursor: pointer;
 }
`