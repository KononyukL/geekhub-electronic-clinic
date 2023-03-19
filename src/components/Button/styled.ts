import styled from "styled-components";

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;