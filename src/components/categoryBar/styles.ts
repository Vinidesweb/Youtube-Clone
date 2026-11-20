import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 8px 0;
  top: 55px;
  background-color: #fff;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ $active }) => $active ? "#0f0f0f" : "#f2f2f2"};
  color: ${({ $active }) => $active ? "#fff" : "#0f0f0f"};

  &:hover {
    background-color: ${({ $active }) => $active ? "#0f0f0f" : "#e5e5e5"};
  }
`;

export const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
  color: #0f0f0f;

  &:hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) { display: none; }
`;