import React from 'react'
import * as S from "./InicioStyle";
import foto from '../../assets/img/foto.png';
import linkedin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';
export default function Inicio() {
    return (
        <S.ContainerInicio>
            <S.ContainerText>    
                Olá, Meu nome é <S.StyledName>Juliana </S.StyledName>e sou uma desenvolvedora Full-Stack
             <S.CaixaIcones>
        <a href="https://www.linkedin.com/in/ju-goncalves-dev/"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/JuGon314"><img src={github} alt="" /></a>
      </S.CaixaIcones>
            </S.ContainerText>
            <img src={foto} alt="" />
        </S.ContainerInicio>


    )
}
