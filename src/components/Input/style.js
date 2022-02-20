import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: start;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 8px;
  border: 1px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.5s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    border: none;
    flex: 1;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
