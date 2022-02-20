import styled, { keyframes } from "styled-components";
import loginimg from "../../assets/loginimg.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${loginimg}) no-repeat center, var(--black);
    background-size: contain;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

const appearFromRight = keyframes`
from{
    opacity:0;
    transform:translateX(50px);
}
to{
    opacity:1;
    transform:translateY(0)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromRight} 1s;
  form {
    margin: 80px;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 32px;
    }

    div {
      margin-top: 16px;
    }
    p {
      margin-top: 8px;
      a {
        font-weight: bold;
        color: var(--orange);
      }
    }
  }
`;
