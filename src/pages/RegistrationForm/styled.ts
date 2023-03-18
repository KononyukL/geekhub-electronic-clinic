import styled from 'styled-components';

export const ErrorText = styled.p`
  font-size: 16px;
  color: red;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
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
`;
