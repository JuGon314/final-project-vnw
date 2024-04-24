import React from 'react'
import * as S from './SobreMimStyle'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import django from '../../assets/img/django.png'
import python from '../../assets/img/python.png'
import nodejs from '../../assets/img/nodejs.png'
export default function SobreMim() {
  return (
    <S.CaixaSobre>
      <p>
      Aos 21 anos, minha jornada na programação já é repleta de aprendizados e conquistas inspiradoras. Tudo começou em 2021, durante a pandemia, quando decidi mergulhar de cabeça nos cursos online gratuitos de programação. Foi o ponto de partida para uma paixão que só cresceu com o tempo.
      <br />
      <br />
      Em 2022, dei um passo crucial ao ingressar no <a href="https://programadoresdoamanha.org">Programadores de Amanhã</a>. Durante um ano, absorvi conhecimento como uma esponja, explorando desde os fundamentos do <span>HTML</span> e <span>CSS</span> até ferramentas avançadas como <span>React</span> e <span>Node.js</span>. Além disso, dediquei-me também às aulas de inglês e desenvolvimento de soft skills, reconhecendo a importância de uma abordagem holística para o sucesso profissional.
      <br />
      <br />
      O ano de 2023 foi marcado pela conclusão do curso no <span>Programadores do Amanhã</span>, mas não foi o fim da minha jornada. Movida pela paixão pelo aprendizado, continuei meus estudos de forma independente. Minha determinação logo foi recompensada quando conquistei minha primeira oportunidade de trabalho no final do ano.
      <br />
      <br />
      Agora, em 2024, sigo firme em minha jornada de crescimento profissional e pessoal. Meu portfólio em <span>React</span> não é apenas uma vitrine de habilidades; é um testemunho da minha dedicação, habilidades técnicas e capacidade de superar desafios. Com uma base sólida e uma mente aberta para novas experiências, estou pronta para enfrentar os desafios do futuro e continuar minha ascensão no mundo da tecnologia.
      <br />
      <br />
      Bem-vindos ao meu universo, onde cada linha de código conta uma história de determinação, aprendizado e sucesso.
      </p>

      <h3>Minhas skills:</h3>
      <S.CaixaIcones>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={django} alt="django" />
        <img src={python} alt="python" />
        <img src={nodejs} alt="node.js" />
      </S.CaixaIcones>

    </S.CaixaSobre>
  )
}
