import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
`;

export const CreateButton = styled.button`
  height: 36px;
  padding: 0 16px;
  background-color: #0f0f0f;
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #272727;
  }
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