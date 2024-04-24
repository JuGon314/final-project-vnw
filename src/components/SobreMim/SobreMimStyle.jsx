import styled from "styled-components";

export const CaixaSobre = styled.div`
display: flex;
flex-direction: column;
background-color: #212121;
width: 70%;
text-align: justify;
margin: 0 auto;

img{
display: flex;
}

p{
color: white;
padding: 115px 0 0 0;
font-weight: bold;
font-size: 20px;
}

h3{
color: white;
padding: 30px 0 30px 0;
margin: 0 auto;
}

@media (max-width: 950px){
    p{
font-size: 20px;
padding: 20px;
}

img{
height: 7vh;
padding: 0 10px;
    }
}

a {
    color:white;
}

a:hover {
    color: #fe10d5;
}

span:hover {
    color: #fe20d5;
}
`
export const CaixaIcones = styled.div`
display: flex;

img {
    width: 6%;
    margin: auto;
}

img:hover {
    transform: scale(1.2);
}

@media (max-width: 950px){
height: 100%;
}
`