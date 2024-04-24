import styled from "styled-components";

export const MenuContainer = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 80px;
background-color:#fe10d5;
display: flex;
justify-content: center;
`
export const Caixa = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
export const ContainerUl = styled.ul`
display: flex;
a {
  transition-duration: 0.4s;
}
a:hover {
  background-color: #ffffff;
  color: black;
  font-weight: bold;
}
a{
color:white ;
display: flex;
justify-content: center;
padding: 31px 70px;
font-weight: bold;
}
`
export const CaixaIcones = styled.div`
img{
width: 50px;
}
img:hover{
    width: 55px;
}
`