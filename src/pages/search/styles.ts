import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  font-size: 20px;
  font-weight: 500;
`;

export const Grid = styled.div<{ $openMenu: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $openMenu }) => ($openMenu ? 3 : 4)}, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

export const EmptyText = styled.p`
  color: #606060;
  font-size: 16px;
`;