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
  width: 335px;
  border-radius: 10px;
`;

export const Doctor = styled(Button)`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const AllDoctors = styled(Doctor)`
  background: #2421f3;
`;
