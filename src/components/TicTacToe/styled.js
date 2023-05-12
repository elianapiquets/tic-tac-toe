import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-template-rows: repeat(3, 60px);
  grid-gap: 10px;
`;

export const Button = styled.button`
  border: solid 1px black;
  text-align: center;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  background: white;
  cursor: pointer;

  &:hover {
    background: #dfdfdf;
  }

  &:disabled {
    cursor: default;
    color: black;
    background: white;
  }
`;
