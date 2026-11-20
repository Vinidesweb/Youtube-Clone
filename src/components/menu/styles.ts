import styled from "styled-components";

export const Container = styled.div<{ $openMenu: boolean; $mobileOpen: boolean }>`
 width: ${({ $openMenu }) => $openMenu ? "250px" : "100px"};
 height: calc(100vh - 55px);
 box-sizing: border-box;
 padding: 10px 5px;
 display: flex;
 align-items: stretch;
 flex-direction: column;
 overflow-y: auto;
 position: sticky;
 top: 55px;
 flex-shrink: 0;

 @media (max-width: 768px) {
    position: fixed;
    top: 55px;
    left: 0;
    width: 250px;
    height: calc(100vh - 55px);
    height: calc(100dvh - 55px);
    background-color: #fff;
    z-index: 999;
    transform: translateX(${({ $mobileOpen }) => $mobileOpen ? "0" : "-100%"});
    transition: transform 0.2s ease;
  }
`;

export const MenuItem = styled.div<{ $openMenu: boolean }>`
 width: 100%;
 min-height: ${({ $openMenu }) => $openMenu ? "45px" : "70px"};
 border-radius: 10px;
 cursor: pointer;
 padding: ${({ $openMenu }) => $openMenu ? "2px 15px" : "8px 5px"};
 box-sizing: border-box;
 display: flex;
 flex-direction: ${({ $openMenu }) => $openMenu ? "row" : "column"};
 align-items: center;
  justify-content: ${({ $openMenu }) => $openMenu ? "flex-start" : "center"};

span {
 font-weight: ${({ $openMenu }) => $openMenu ? "600" : "400"};
 margin-left: ${({ $openMenu }) => $openMenu ? "20px" : "none"};
 font-size: ${({ $openMenu }) => $openMenu ? "16px" : "12px"};
}

&:hover {
    background-color: #f2f2f2;
}
`;

export const SectionTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  padding: 8px 15px;
  margin: 0;
  color: #0f0f0f;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin: 8px 0;
`;

export const ButtonIcon = styled.img`
 width: 25px;
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 55px 0 0 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;