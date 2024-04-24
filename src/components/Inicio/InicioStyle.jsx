import styled from "styled-components";

export const ContainerInicio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 100px;
  height: 100vh;
  img {
    width: 30vw;
    height: 60vh;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 35px;
    height: auto;
    padding: 36px;

    img {
      height: 50vh;
      width: 50vw;
    }
  }
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  color: white;
  gap: 5px;
  @media (max-width: 950px) {
    font-size: 25px;
  }
`;
export const StyledName = styled.div`
  color: #fe10d5;
  @media (max-width: 950px) {
    display: contents;
  }
`;
export const CaixaIcones = styled.div`
  img {
    width: 45px;
    height: 45px;
    margin: 20px 15px 0 0;
  }
`;
