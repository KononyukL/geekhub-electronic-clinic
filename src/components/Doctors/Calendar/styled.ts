import styled from 'styled-components';
import Button from '../../Button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonSwitch = styled(Button)`
  background-color: rgba(255, 255, 255, 0);
  color: black;
  &:hover {
    background-color: rgba(192, 192, 192, 0.29);
  }
`;

export const PrimeData = styled.div`
  color: #000000;
`;
export const Data = styled.div`
color: #989898`;
export const Title = styled.h2`
  font-size: 16px;
`;
export const Text = styled.p``;

export const ButtonWrapper = styled.div``;
