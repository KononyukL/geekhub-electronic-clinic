import styled from 'styled-components';
import Button from '../../../components/Button';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1420px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 90px 0 170px 0;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Doctor = styled(Button)`
  width: 260px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  color: #000000;
  background: #F4F4F4;

  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
`;

export const AllDoctors = styled(Doctor)`
  color: #000000;
  background: #bcbcbc;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
