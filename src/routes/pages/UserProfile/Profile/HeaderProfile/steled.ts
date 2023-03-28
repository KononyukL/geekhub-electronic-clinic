import styled from 'styled-components';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WrapInfo = styled.div`
  display: flex;
  gap: 24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Text = styled.p``;

export const WrapButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledButton = styled(Button)`
  width: 100px;
  padding: 2px;
  font-weight: 500;
  font-size: 16px;
`;
export const StyledInput = styled(Input)``;
