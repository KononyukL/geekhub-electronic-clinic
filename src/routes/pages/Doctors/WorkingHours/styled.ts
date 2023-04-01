import styled from 'styled-components';
import Button from "../../../../components/Button";

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  width: 360px;
  height: 200px;
`;

export const TimeButton = styled(Button)`
  width: 75px;
  height: 45px;
  margin: 10px;
  border-radius: 10px;
  color: #000000;
  background-color: #CFCFCF;

  &:hover {
    background-color: rgba(0, 0, 0, 0.47);
  }
`;
