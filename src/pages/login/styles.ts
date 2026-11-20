import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 40px 16px;          
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 24px 12px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
  padding: 48px 40px 36px;
  border: 1px solid #dadce0;
  border-radius: 28px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const LogoImage = styled.img`
  width: 90px;
  align-self: center;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #1f1f1f;
`;

export const Subtitle = styled.p`
  margin: 8px 0 32px;
  font-size: 16px;
  text-align: center;
  color: #1f1f1f;
`;

export const Field = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: absolute;
  left: 14px;
  top: 17px;
  padding: 0 4px;
  background-color: #fff;
  color: #5f6368;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.15s ease;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  padding: 0 16px;
  font-size: 16px;
  border: 1px solid #747775;
  border-radius: 4px;
  outline: none;

  &:focus {
    border: 2px solid #0b57d0;
    padding: 0 15px;
  }

  &:focus + ${Label},
  &:not(:placeholder-shown) + ${Label} {
    top: -9px;
    font-size: 12px;
  }

  &:focus + ${Label} {
    color: #0b57d0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height:90px;
  min-height: 56px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid #747775;
  border-radius: 4px;
  outline: none;
  resize: vertical;

  &:focus {
    border: 2px solid #0b57d0;
    padding: 15px;
  }

  &:focus + ${Label},
  &:not(:placeholder-shown) + ${Label} {
    top: -9px;
    font-size: 12px;
  }

  &:focus + ${Label} {
    color: #0b57d0;
  }
`;

export const Actions = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #0b57d0;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 8px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f4f9;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #0b57d0;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0a4db8;
  }
`;

export const ErrorText = styled.span`
  color: #d93025;
  font-size: 13px;
  margin-top: -8px;
`;