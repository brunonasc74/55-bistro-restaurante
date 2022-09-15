import styled from "styled-components"


export const Container = styled.div`

justify-content: space-between;
background-color: #0d0d14;

.footer-top{
  display: flex;
  padding: 30px 5rem;
  justify-content: space-between;
  align-items: flex-start;
  
}

.flex-col{
  width: 22rem;
}


.footer-top .flex.col{
  width: 15rem;
  margin-bottom: 30px;
}

.footer-top .flex.col .logo-name, 
.footer-top .flex.col .titulo {
  font-size: 10px;
  color: white;
  margin-top: 10px;
  margin-bottom: 2rem;
  letter-spacing: 3px;
}
.footer-top .flex-col .descricao{
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.footer-top .flex-col .social {
  margin-top: 10px;
  display: flex;
}

.footer-top .flex-col .social li{
  list-style-type: none;
}

.footer-top .flex-col .social li a{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 22px;
  margin-right: 10px;
  background-color: #b41212;
  transition: all 0.3s ease-in-out;
  
}

.footer-top .flex-col .social li a:hover{
  color: white;
  background-color: #0d0d14;
}

.footer-top .flex-col .timings li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 30px;
  font-size: 14px;
}

.footer-top .flex-col .time li .days {
  color: white;
  font-size: 14px;
}

.footer-top .flex-col .time li .time {
  color: #858585;
  font-size: 14px;
}

`
