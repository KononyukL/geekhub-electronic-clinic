import styled from 'styled-components';
import Button from '../../../../components/Button';

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

export const Data = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px 0 5px;
  color: #989898;

  &:hover {
    cursor: pointer;
  }
`;

export const Day = styled.div`
  font-size: 16px;
  font-weight: 400;

  &.active {
    color: #000000;
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div``;
