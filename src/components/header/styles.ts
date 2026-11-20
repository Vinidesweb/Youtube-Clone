import styled from "styled-components";

export const Container = styled.header`
 width: 100%;
 height: 55px;
 background-color: #fff;
 padding: 0px 16px;
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: fixed;
 top: 0;
 z-index: 999;

 @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

export const LogoContainer = styled.div`
 display: flex;
 align-items: center;
 flex-shrink: 0;
`;

export const YoutubeLogo = styled.img`
  width: 100px;
  cursor: pointer;
  @media (max-width: 600px) { width: 80px; }
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 margin: ${({ margin }) => margin? margin : '0'};
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;

&:hover {
    background-color: #f2f2f2;
 }

`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  border-radius: 50%;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
 }
`;

export const ButtonIcon = styled.img`
 width: 20px;
`;

export const SearchContainer = styled.div`
 display: flex;
 flex: 1;
  min-width: 0;
  justify-content: center;
  padding: 0 16px;
  @media (max-width: 600px) { padding: 0 8px; }
`;

export const SearchInputContainer = styled.div`
 flex: 1;
 min-width: 0;
 max-width: 400px; 
 height: 35px;
 border: 1px solid #d3d3d3;
 border-radius: 40px 0 0 40px;
 display: flex;
 align-items: center;
 padding: 0 16px;
`;

export const SearchInput = styled.input`
 min-width: 0;
 width: 100%;
 height: 25px;
 border: none;
 outline: none;
`;

export const SearchButton = styled.button`
 flex-shrink: 0;
 border-radius: 0 40px 40px 0;
 height: 35px;
 width: 70px;
 background-color: #f8f8f8;
 border: 1px solid #d3d3d3;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 @media (max-width: 600px) { width: 50px; }
`;

export const LoginButton = styled.button`
  height: 36px;
  margin-left: 10px;
  padding: 0 15px 0 11px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid #d3d3d3;
  border-radius: 18px;
  color: #065fd4;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #def1ff;
    border-color: transparent;
  }

  @media (max-width: 600px) {
    padding: 0 8px;
    span { display: none; }
  }
`;

export const HeaderButton = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) { min-width: 0; }
`;

export const HideOnMobile = styled.div`
  display: contents;
  @media (max-width: 600px) { display: none; }
`;

export const UserArea = styled.div`
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  width: 260px;
  padding: 8px 0;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 8px;

  strong { display: block; font-size: 16px; font-weight: 500; }
  span { font-size: 14px; color: #606060; }
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;