import styled from "styled-components";

export const Container = styled.div<{ $openMenu: boolean }>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: repeat(${({ $openMenu }) => ($openMenu ? 3 : 4)}, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;